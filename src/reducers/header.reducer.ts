import { AnyAction, Reducer } from "redux";
import { UI_HEADER_TITLE } from "../actions/actionConstants";

export interface HeaderState {
  title: string;
}

const initialState: HeaderState = {
  title: "Dashboard",
};
export const headerReducer: Reducer<HeaderState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case UI_HEADER_TITLE:
      return { ...currentState, title: dispatchedAction.payload };
    default:
      return currentState;
  }
};
