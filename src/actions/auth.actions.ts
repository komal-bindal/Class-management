import { User } from "../models/User";

export const ME_LOGIN = "me/login";
export const ME_FETCH = "me/fetch";

export const meFetchAction = (u: User) => {
  return { type: ME_LOGIN, payload: u };
};
export const meLoginAction = (u: User) => {
  return { type: ME_LOGIN, payload: u };
};
