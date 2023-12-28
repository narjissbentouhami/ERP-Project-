import axios, { AxiosError } from "axios";

interface UserData {
    email: string,
    password: string,
    prenom: string,
    nom: string,
    entreprise: string,
    telephone: string,
    url?: string,
}
interface UserDataFilter {
    roles:string[],
    permissions:string[],
}
const {
    BACK_URL,
    BACK_PORT,
} = process.env
export class User {
    static usersEndpoint = "users"
    static read = async (userDataFilter: UserDataFilter) => {
        let response = await axios.get(`${BACK_URL}:${BACK_PORT}/${User.usersEndpoint}`, {
            params: userDataFilter,
        })
            .catch(User.catch);
        return response;
    }
    static create =async (userData:UserData) => {
        let response = await axios.post(`${BACK_URL}:${BACK_PORT}/${User.usersEndpoint}`, userData)
            .catch(User.catch);
        return response;
    }
    static update = async (id: string, userData: UserData) => {
        let response = await axios.put(`${BACK_URL}:${BACK_PORT}/${User.usersEndpoint}/${id}`, userData)
            .catch(User.catch);
        return response;
    }
    static delete = async (id: string) => {
        let response = await axios.delete(`${BACK_URL}:${BACK_PORT}/${User.usersEndpoint}/${id}`)
            .catch(User.catch);
        return response;
    }
    static catch = (error: AxiosError) => {
        return error.response;
    }
}
