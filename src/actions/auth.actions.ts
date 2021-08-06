import { bindActionCreators } from "redux";
import { User } from "../models/User";
import { store } from "../store";
import { ME_FETCH, ME_LOGIN } from "./actionConstants";

const meFetchAction = (u: User) => {
  return { type: ME_FETCH, payload: u };
};
const meLoginAction = (u: User) => {
  return { type: ME_LOGIN, payload: u };
};

export const authActions = bindActionCreators(
  { meFetchAction, meLoginAction },
  store.dispatch
);
