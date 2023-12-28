import $ from 'jquery'

export default async function otpHandle(code : number , email : string) {
    if (code) {
        let otpData = {
            code,
            email
        }
        let response = await fetch("/api/auth?action=validateotp", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(otpData),
        });
        if(response.ok){
            window.location.href=`/newpassword?email=${email}`;
        }
        else{
            alert("doesn't send");
        }
    }

}
