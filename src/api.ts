import axios from "axios";

interface LoginData{
    email: string;
    password: string;
}

const BASE_URL = "https://api-dev.domecompass.com"

export const login = (data: LoginData) => {
    const url = BASE_URL + "/login";
    console.log(data);
    axios.post(url, undefined, {headers: data}).then((response) => console.log(response))

}