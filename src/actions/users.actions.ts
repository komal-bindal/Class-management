import { User } from "../models/User";
import {
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_COMPLETED,
  USER_FETCH_ONE_ERROR,
} from "./actionConstants";

export const fetchUsersAction = (loading: boolean) => {
  return {
    type: USERS_FETCH,
    payload: loading,
  };
};
export const fetchUsersCompletedAction = (users: User[], loading: boolean) => {
  return {
    type: USERS_FETCH_COMPLETED,
    payload: { users, loading },
  };
};

export const userFetchOneAction = (id: number) => {
  return {
    type: USER_FETCH_ONE,
    payload: { id, selectedIdLoading: true },
  };
};
export const userFetchOneCompletedAction = (id: number, user: User) => {
  
  return {
    type: USER_FETCH_ONE_COMPLETED,
    payload: { id, user },
  };
};
export const userFetchOneErrorAction = (id: number, error: string) => {
  return { type: USER_FETCH_ONE_ERROR, payload: { id, error } };
};