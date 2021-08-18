import { Group } from "../models/Group";
import { GROUP_QUERY_CHANGED, GROUP_QUERY_COMPLETED } from "./actionConstants";

export const groupQueryAction = (query: string, loading: boolean) => {
  return { type: GROUP_QUERY_CHANGED, payload: { query, loading } };
};

export const groupQueryCompletedAction = (groups: Group[], query: string) => {
  return { type: GROUP_QUERY_COMPLETED, payload: { query, groups } };
};
