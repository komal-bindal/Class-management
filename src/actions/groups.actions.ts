import { Group } from "../models/Group";

export const GROUP_QUERY_COMPLETED = "group/fetch";

export const GROUP_QUERY = "group/query";

export const groupQueryAction = (query: string) => {
  return { type: GROUP_QUERY, payload: query };
};

export const groupQueryCompletedAction = (groups: Group[], query: string) => {
  return { type: GROUP_QUERY_COMPLETED, payload: { query, groups } };
};
