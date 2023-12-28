import $ from 'jquery'

export default async function newPasswordHandle(password: string, newPassword: string, email: string) {
    if (password === newPassword) {
        let newPasswordData = {
            password,
            email,
        }
        console.log(newPassword)
        let response = await fetch("/api/auth?action=resetpassword", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newPasswordData),
        });
        if(response.ok){
            window.location.href=`/`;
        }
        else{
            alert("Error");
        }
    }

}
