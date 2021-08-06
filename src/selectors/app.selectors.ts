import { AppState } from "../store";

export const authStateSelector = (state: AppState) => state.auth;
export const groupsSelector = (state: AppState) => state.groups;
export const usersSelector = (state: AppState) => state.users;
export const sidebarSelector = (state: AppState) => state.sidebar;
export const headerSelector = (state: AppState) => state.header;
