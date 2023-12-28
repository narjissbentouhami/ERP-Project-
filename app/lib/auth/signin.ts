import $ from 'jquery';
import { ADMIN_ROLE } from '@/app/constants/auth'

interface LoginData {
    email: string,
    password: string,
}
export default async function signinHandle({ email, password }: LoginData) {
    let emailErrorSpan = $('#email-error');
    let passwordErrorSpan = $('#password-error');

    // Clear any existing error messages
    emailErrorSpan.text("");
    passwordErrorSpan.text("");

    if (!email && !password) {
        emailErrorSpan.text("Saisissez l'email");
        passwordErrorSpan.text("Saisissez le mot de passe");
    } else if (!email) {
        emailErrorSpan.text("Saisissez l'email");
    } else if (!password) {
        passwordErrorSpan.text("Saisissez le mot de passe");
    }
    else{
        let loginData = {
            email,
            password,
        }
        let response  = await fetch("/api/auth?action=login", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });
        if (response.ok) {
            let data = (await response.json()).data;
            let authUser = data.userData;
            console.log(authUser);
            
            if (authUser.role.nom == ADMIN_ROLE) {
                localStorage.setItem("authUser", JSON.stringify(authUser));
                window.location.href = "/dashboard";
            }
        }
    }

}
