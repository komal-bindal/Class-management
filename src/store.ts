import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

const ME_LOGIN = "me/login";
const ME_FETCH = "me/fetch";
const UI_SIDEBAR_TOGGLE = "ui_sidebar/toggle";
const UI_HEADER_TITLE = "ui/headerTitle";
export const GROUP_QUERY_COMPLETED = "group/fetch";
const GROUP_QUERY = "group/query";

export interface AppData {
  me?: User;
  query: string;
  groupQueryMap: { [query: string]: number[] };
  groups: { [id: number]: Group };
  isSidebarOpen: boolean;
  headerTitle: string;
}

const initialState: AppData = {
  me: undefined,
  query: "",
  groupQueryMap: {},
  groups: {},
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
    case ME_FETCH:
      return { ...currentState, me: dispatchedAction.payload };
    case GROUP_QUERY:
      return { ...currentState, query: dispatchedAction.payload };
    case GROUP_QUERY_COMPLETED:
      const groups = dispatchedAction.payload.groups as Group[];
      const groupIds: number[] = groups.map((group) => group.id);
      const queryMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...currentState,
        groups: { ...currentState.groups, ...queryMap },
        groupQueryMap: {
          ...currentState.groupQueryMap,
          [dispatchedAction.payload.query]: groupIds,
        },
      };
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
  return { type: UI_SIDEBAR_TOGGLE };
};

export const groupQuery = (query: string) => {
  return { type: GROUP_QUERY, payload: query };
};

export const groupQueryCompleted = (groups: Group[], query: string) => {
  return { type: GROUP_QUERY_COMPLETED, payload: { query, groups } };
};
export const useAppSelector: TypedUseSelectorHook<AppData> = useSelector;
