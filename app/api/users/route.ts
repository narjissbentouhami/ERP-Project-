import { NextRequest } from "next/server";
import { z } from "zod";
import { User } from "./User";

interface FormSchemaDataUser {
    email: z.ZodString;
    password: z.ZodString,
    nom: z.ZodString,
    prenom: z.ZodString,
    entreprise: z.ZodString,
    telephone: z.ZodString,
    url: z.ZodOptional<z.ZodString>,
    role: z.ZodString,
    permissions: z.ZodArray<z.ZodString, "atleastone">,
}
interface UserDataFiler {
    roles: string[],
    permissions: string[],
}
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const userDataFilter: UserDataFiler = {
        roles: searchParams.getAll("role"),
        permissions: searchParams.getAll("permission"),
    }
    let response = await User.read(userDataFilter);
    if (response?.status == 200) {
        return Response.json({
            data: response.data?.data,
            message: response.data?.message,
        }); // for debugging
    } else {
        let message = response?.data?.message ?? "No message error";
        return Response.json({ data: message }); // for debugging
    }
    return Response.redirect("/dashboard"); // TODO: redirect to the appropriate [dashboard] using the auth user's role
}
export async function POST(request: NextRequest) {
    const formSchemaDataUser: FormSchemaDataUser = {
        email: z.string().email(),
        password: z.string(),
        prenom: z.string(),
        nom: z.string(),
        entreprise: z.string(),
        telephone: z.string(),
        url: z.string().url().optional(),
        role: z.string(),
        permissions: z.string().array().nonempty(),
    };
    const formSchemaUser = z.object({ ...formSchemaDataUser });
    const formData = await request.json();
    const dataUser = formSchemaUser.parse({
        email: formData.email,
        password: formData.password,
        prenom: formData.prenom,
        nom: formData.nom,
        entreprise: formData.entreprise,
        telephone: formData.telephone,
        url: formData.url,
        role: formData.role,
        permissions: formData.permissions,
    });
    let response = await User.create(dataUser);
    if (response?.status == 201) {
        return Response.json({
            data: response.data?.data,
            message: response.data?.message,
        }); // for debugging
    } else {
        let message = response?.data?.message ?? "No message error";
        return Response.json({ data: message }); // for debugging
    }
    return Response.redirect("/dashboard"); // TODO: redirect to the appropriate [dashboard] using the auth user's role
}
export async function PUT(request: NextRequest) {
    const formSchemaDataUser: FormSchemaDataUser = {
        email: z.string().email(),
        password: z.string(),
        prenom: z.string(),
        nom: z.string(),
        entreprise: z.string(),
        telephone: z.string(),
        url: z.string().url().optional(),
        role: z.string(),
        permissions: z.string().array().nonempty(),
    };
    const formSchemaUser = z.object({ ...formSchemaDataUser });
    const formData = await request.json();
    const dataUser = formSchemaUser.parse({
        email: formData.email,
        password: formData.password,
        prenom: formData.prenom,
        nom: formData.nom,
        entreprise: formData.entreprise,
        telephone: formData.telephone,
        url: formData.url,
        role: formData.role,
        permissions: formData.permissions,
    });
    const searchParams = request.nextUrl.searchParams
    const idUser = searchParams.get("id");
    if (idUser) {
        let response = await User.update(idUser, dataUser);
        if (response?.status == 200) {
            return Response.json({
                data: response.data?.data,
                message: response.data?.message,
            }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return Response.json({ data: message }); // for debugging
        }
    } else {
        let message = "No id provided";
        return Response.json({ data: message }); // for debugging
    }
    return Response.redirect("/dashboard"); // TODO: redirect to the appropriate [dashboard] using the auth user's role
}
export async function DELETE(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const idUser = searchParams.get("id");
    if (idUser) {
        let response = await User.delete(idUser);
        if (response?.status == 200) {
            return Response.json({
                data: response.data?.data,
                message: response.data?.message,
            }); // for debugging
        } else {
            let message = response?.data?.message ?? "No message error";
            return Response.json({ data: message }); // for debugging
        }
    } else {
        let message = "No id provided";
        return Response.json({ data: message }); // for debugging
    }
    return Response.redirect("/dashboard"); // TODO: redirect to the appropriate [dashboard] using the auth user's role
}
