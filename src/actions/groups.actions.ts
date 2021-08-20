import { Group } from "../models/Group";
import {
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
} from "./actionConstants";

export const groupQueryAction = (query: string, loading: boolean) => {
  return { type: GROUP_QUERY_CHANGED, payload: { query, loading } };
};

export const groupQueryCompletedAction = (groups: Group[], query: string) => {
  return { type: GROUP_QUERY_COMPLETED, payload: { query, groups } };
};

export const groupFetchOneAction = (id: number) => {
  return { type: GROUP_FETCH_ONE, payload: { id, selectedIdLoading: true } };
};

export const groupFetchOneCompletedAction = (id: number, group: Group) => {
  return {
    type: GROUP_FETCH_ONE_COMPLETED,
    payload: { id, group },
  };
};
export const groupFetchOneErrorAction = (id: number, error: string) => {
  return { type: GROUP_FETCH_ONE_ERROR, payload: { id, error } };
};
