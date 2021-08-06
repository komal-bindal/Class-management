import { AnyAction, Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actionConstants";

export interface AuthState {
  id?: number;
}

export const initialState = {
  id: undefined,
};

export const authReducer: Reducer<AuthState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...currentState, id: dispatchedAction.payload.id };
    default:
      return currentState;
  }
};
