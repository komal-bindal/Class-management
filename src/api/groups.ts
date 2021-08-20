import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL, get } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

export interface GroupResponse {
  data: Group[];
}

export const fetchGroupsApi = (data?: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return get<GroupResponse>(url, { params: data });
};

export const fetchOneGroupApi = (id: number) => {
  const url = BASE_URL + "/groups/" + id;
  return axios.get<GroupResponse>(url).then((response) => {
    return response.data.data;
  });
};
