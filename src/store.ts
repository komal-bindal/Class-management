import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

const ME_LOGIN = "me/login";
const UI_SIDEBAR_TOGGLE = "ui_sidebar/toggle";
const UI_HEADER_TITLE = "ui/headerTitle";

export interface AppData {
  me?: User;
  groups: Group[];
  isSidebarOpen: boolean;
  headerTitle: string;
}

const initialState: AppData = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
  headerTitle: "Dashboard",
};

const reducer: Reducer<AppData, AnyAction> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  let type = dispatchedAction.type;
  switch (type) {
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };
    case UI_SIDEBAR_TOGGLE:
      return { ...currentState, isSidebarOpen: !currentState.isSidebarOpen };
    case UI_HEADER_TITLE:
      return { ...currentState, headerTitle: dispatchedAction.payload };
    default:
      return currentState;
  }
};

export const store = createStore(reducer);
export const meFetch = (u: User) => {
  return { type: ME_LOGIN, payload: u };
};
export const uiHeaderTitleChange = (title: string) => {
  return { type: UI_HEADER_TITLE, payload: title };
};
export const uiSidebarToggle = () => {
  return { type: UI_SIDEBAR_TOGGLE};
};

export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;
