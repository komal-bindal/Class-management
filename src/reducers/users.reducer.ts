import { AnyAction, Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/auth.actions";
import { User } from "../models/User";

export interface UsersState {
  byId: {
    [id: number]: User;
  };
}

export const initialState: UsersState = {
  byId: {},
};

export const userReducer: Reducer<UsersState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return {
        ...currentState,
        byId: { [dispatchedAction.payload.id]: dispatchedAction.payload },
      };
    default:
      return currentState;
  }
};
