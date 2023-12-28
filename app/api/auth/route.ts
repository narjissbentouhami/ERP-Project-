import { NextRequest, NextResponse } from "next/server";
import { Authentication } from "./Authenication";
import { z } from 'zod';

interface FormSchemaDataLogin {
    email: z.ZodString;
    password: z.ZodString,
}
interface FormSchemaDataSignUp extends FormSchemaDataLogin {
    nom: z.ZodString,
    prenom: z.ZodString,
    entreprise: z.ZodString,
    telephone: z.ZodString,
    role: z.ZodString,
    url: z.ZodOptional<z.ZodString>,
}
export async function POST(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    const formSchemaDataLogin: FormSchemaDataLogin = {
        email: z.string().email(),
        password: z.string(),
    };
    if (action == "login") {
        const formLoginSchema = z.object({ ...formSchemaDataLogin }); // create object to be validated
        const formData = await request.json();
        const LoginData = formLoginSchema.parse({
            email: formData.email,
            password: formData.password,
        }); // validate data
        let response = await Authentication.login(LoginData);
        if (response?.status == 200) {
            return Response.json({ data: response.data }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return Response.json({ data: message }); // for debugging
        }
    } else if (action == "signup") {
        let formSchemaDataSignUp: FormSchemaDataSignUp = {
            ...formSchemaDataLogin,
            prenom: z.string(),
            nom: z.string(),
            entreprise: z.string(),
            telephone: z.string(),
            role: z.string(),
            url: z.string().url().optional(),
        }
        const formSignUpSchema = z.object({ ...formSchemaDataSignUp });
        const formData = await request.json();
        const signUpData = formSignUpSchema.parse({
            email: formData.email,
            password: formData.password,
            prenom: formData.prenom,
            nom: formData.nom,
            entreprise: formData.entreprise,
            telephone: formData.telephone,
            role: formData.role,
            url: formData.url,
        });
        let response = await Authentication.register(signUpData);
        if (response?.status == 201) {
            return Response.json({ data: response.data?.message }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return Response.json({ data: message }); // for debugging
        }
        return Response.redirect("/login"); // TODO:
    } else if (action == "forgotpassword") {
        const emailSchema = z.string().email();
        const formData = await request.json();
        const email = emailSchema.parse(formData.email);
        let response = await Authentication.forgotPassword(email);
        if (response?.status == 200) {
            return NextResponse.json({
                message: response.data?.message,
            }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return NextResponse.json({ data: message }); // for debugging
        }
    } else if (action == "validateotp") {
        const otpSchemaData = {
            email: z.string().email(),
            otp: z.number().int().positive(),
        }
        const formData = await request.json();
        const otpData = z.object(otpSchemaData).parse({
            email: formData.email,
            otp: formData.code,
        });
        let response = await Authentication.validateOTP(otpData);
        if (response?.status == 200) {
            return NextResponse.json({
                message: response.data?.message,
            }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return NextResponse.json({ data: message }); // for debugging
        }
    } else if (action == "resetpassword") {
        const resetPasswordSchemaData = {
            email: z.string().email(),
            password: z.string().min(8).max(16),
        }
        const formData = await request.json();
        const resetPasswordData = z.object(resetPasswordSchemaData).parse({
            email: formData.email,
            password: formData.password,
        });
        let response = await Authentication.resetPassword(resetPasswordData);
        if (response?.status == 200) {
            return NextResponse.json({
                message: response.data?.message,
            }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return NextResponse.json({ data: message }); // for debugging
        }
    }
}
