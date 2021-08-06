import { bindActionCreators } from "redux";
import { store } from "../store";
import { UI_SIDEBAR_TOGGLE } from "./actionConstants";


const uiSidebarToggleAction = () => {
  return { type: UI_SIDEBAR_TOGGLE };
};
export const sidebarActions = bindActionCreators({uiSidebarToggleAction}, store.dispatch)