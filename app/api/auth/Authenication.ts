import axios, { AxiosError } from 'axios';

interface LoginData {
    email: string,
    password: string,
}
interface ResetPasswordData {
    email: string,
    password: string,
}
interface OTPData {
    email: string,
    otp: number,
}
interface RegisterData extends LoginData {
    prenom: string,
    nom: string,
    entreprise: string,
    telephone: string,
    role: string,
    url?: string,
}
const {
    BACK_URL,
    BACK_PORT,
} = process.env
export class Authentication {
    static authEndpoint = "auth";
    static login = async (loginData: LoginData) => {
        let response = await axios.post(`${BACK_URL}:${BACK_PORT}/auth/login`, loginData)
            .catch(Authentication.catch);
        return response;
    }
    static register = async (registerData: RegisterData) => {
        let response = await axios.post(`${BACK_URL}:${BACK_PORT}/auth/signup`, registerData)
            .catch(Authentication.catch);
        return response;
    }
    static logout = () => {

    }
    static forgotPassword = async (email:string) => {
        let response = await axios.post(`${BACK_URL}:${BACK_PORT}/${Authentication.authEndpoint}/forgotpassword`, {email})
            .catch(Authentication.catch);
        return response;
    }
    static resetPassword = async ({email, password}: ResetPasswordData) => {
        let response = await axios.post(`${BACK_URL}:${BACK_PORT}/${Authentication.authEndpoint}/resetpassword`, {
            email,
            password,
        })
            .catch(Authentication.catch);
        return response;
    }
    static validateOTP = async ({email, otp}: OTPData) => {
        let response = await axios.post(`${BACK_URL}:${BACK_PORT}/${Authentication.authEndpoint}/validateotp`, {
            email,
            otp,
        })
            .catch(Authentication.catch);
        return response;
    }
    static catch = (error: AxiosError) => {
        return error.response;
    }
}
