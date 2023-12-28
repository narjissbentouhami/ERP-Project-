import axios, { AxiosError } from "axios";

const {
    BACK_URL,
    BACK_PORT,
} = process.env
export class Role {
    static rolesEndpoint = "roles"
    static read = async () => {
        let response = await axios.get(`${BACK_URL}:${BACK_PORT}/${Role.rolesEndpoint}`)
            .catch(Role.catch);
        return response;
    }
    static catch = (error: AxiosError) => {
        return error.response;
    }
}
