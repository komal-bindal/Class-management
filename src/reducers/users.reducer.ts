import { AnyAction, Reducer } from "redux";
import {
  ME_FETCH,
  ME_LOGIN,
  USERS_FETCH,
  USERS_FETCH_COMPLETED,
  USER_FETCH_ONE,
  USER_FETCH_ONE_COMPLETED,
  USER_FETCH_ONE_ERROR,
} from "../actions/actionConstants";
import { User } from "../models/User";
import {
  addMany,
  addOne,
  EntityState,
  initialEntityState,
} from "./entity.reducer";

export interface UsersState extends EntityState<User> {
  list?: User[];
}

const initialState: UsersState = {
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
    case USERS_FETCH:
      return { ...currentState, loadingList: dispatchedAction.payload };
    case USERS_FETCH_COMPLETED:
      const newState = addMany(currentState, dispatchedAction.payload.users);
      return {
        ...newState,
        loadingList: false,
        list: dispatchedAction.payload.users,
      };
    case USER_FETCH_ONE:
      return {
        ...currentState,
        selectedId: dispatchedAction.payload.id,
        selectedIdLoading: dispatchedAction.payload.selectedIdLoading,
        selectedIdError: undefined,
      };
    case USER_FETCH_ONE_COMPLETED:
      return addOne(
        currentState,
        dispatchedAction.payload.user,
        false
      ) as UsersState;
    case USER_FETCH_ONE_ERROR:
      const error =
        dispatchedAction.payload.id === currentState.selectedId
          ? dispatchedAction.payload.error
          : undefined;
      return {
        ...currentState,
        selectedIdLoading: false,
        selectedIdError: error,
      };
    default:
      return currentState;
  }
};
