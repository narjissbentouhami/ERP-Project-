import $ from 'jquery'

export default async function resetPasswordHandle(email : string) {
    let emailErrorSpan = $('#reset-password-email-error');
    emailErrorSpan.text("");
    if (!email) {
        emailErrorSpan.text("Saisissez l'email");
    }
    else{
        let resetPasswordData = {
            email,
        }
        let response = await fetch("/api/auth?action=forgotpassword", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(resetPasswordData),
        });
        if(response.ok){
            window.location.href=`/verifycode?email=${email}`;
        }
        else{
            alert("doesn't send");
        }
        
    }

}
