import { AnyAction, Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actionConstants";
import { User } from "../models/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducer";

export interface UsersState extends EntityState<User> {}

export const initialState: UsersState = {
  ...initialEntityState,
};

export const userReducer: Reducer<UsersState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return addOne(currentState, dispatchedAction.payload);
    //{
    //...currentState,
    //byId: { [dispatchedAction.payload.id]: dispatchedAction.payload },
    //};
    default:
      return currentState;
  }
};
