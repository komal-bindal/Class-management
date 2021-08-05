import { AnyAction, Reducer } from "redux";
import { UI_SIDEBAR_TOGGLE } from "../actions/sidebar.actions";

export interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: true,
};
export const sidebarReducer: Reducer<SidebarState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case UI_SIDEBAR_TOGGLE:
      return { ...currentState, isSidebarOpen: !currentState.isSidebarOpen };
    default:
      return currentState;
  }
};
