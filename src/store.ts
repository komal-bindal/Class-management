import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

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
    case "me/login":
      return { ...currentState, me: dispatchedAction.payload };
    case "ui_sidebar/toggle":
      return { ...currentState, isSidebarOpen: !currentState.isSidebarOpen };
    case "ui/headerTitle":
      return { ...currentState, headerTitle: dispatchedAction.payload };
    default:
      return currentState;
  }
};

export const store = createStore(reducer);

export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;
