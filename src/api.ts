import axios from "axios";
import { Group } from "./groupInterrfaces";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) {
    return config;
  }
  return {
    ...config,
    headers: { ...config.headers, Authorization: token },
  };
});

axios.interceptors.response.use(undefined, function(error){
    if(error.response.data.code === 9101){
        localStorage.removeItem(LS_LOGIN_TOKEN);
        window.location.href = "/login";
    }
    return Promise.reject(error);
})

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}
interface User {
  id?: number;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  role?: "staff" | "admin";
  issues?: Issue[];
}
interface Issue {
  id: number;
  title: string;
}
const BASE_URL = "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN = "login_token";

export const login = (data: LoginData) => {
  const url = BASE_URL + "/login";
  console.log(data);
  return axios
    .post<LoginResponse>(url, data)
    .then((response) => {
      console.log(response);
      localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
      console.log(response.data.token);
    })
    .catch((e) => {
      console.error(e);
    });
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status?: "all-groups"|"suggestions"| "invitations";
}


export const fetchGroups = (data?: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return axios
    .get<Group>(url, { params: data})
    
};
