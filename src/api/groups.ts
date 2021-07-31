import axios from "axios";
import { BASE_URL } from "./base";

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status?: "all-groups"|"suggestions"| "invitations";
  }
  
  
  export const fetchGroups = (data?: GroupRequest) => {
    const url = BASE_URL + "/groups";
    return axios
      .get(url, { params: data})
      
  };