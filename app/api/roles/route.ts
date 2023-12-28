import { NextRequest } from "next/server";
import { Role } from "./Role";

export async function GET(request: NextRequest) {
    let response = await Role.read();
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
