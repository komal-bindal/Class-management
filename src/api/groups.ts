import axios from "axios";
import { Group } from "../models/Group";
import { BASE_URL } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status?: "all-groups" | "suggestions" | "invitations";
}

interface GroupResponse {
  data: Group[];
}

export const fetchGroupsApi = (data?: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => response.data.data);
};
