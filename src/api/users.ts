import axios from "axios";
import { User } from "../models/User";
import { BASE_URL } from "./base";

export const hello = "world";
interface UsersResponse {
  data: User[];
}

interface UserResponse {
  data: User;
}
export const fetchUsersApi = () => {
  const url = BASE_URL + "/people";
  return axios.get<UsersResponse>(url).then((response) => {
    console.log(response.data.data);
    return response.data.data;
  });
};

export const fetchOneUserApi = (id: number) => {
  const url = BASE_URL + "/people/" + id;
  return axios.get<UserResponse>(url).then((response) => {
    console.log(response.data.data);
    return response.data.data;
  });
};
