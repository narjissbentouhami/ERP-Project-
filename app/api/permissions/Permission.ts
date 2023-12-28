import axios, { AxiosError } from "axios";

const {
    BACK_URL,
    BACK_PORT,
} = process.env
export class Permission {
    static permissionsEndpoint = "permissions"
    static read = async () => {
        let response = await axios.get(`${BACK_URL}:${BACK_PORT}/${Permission.permissionsEndpoint}`)
            .catch(Permission.catch);
        return response;
    }
    static catch = (error: AxiosError) => {
        return error.response;
    }
}
