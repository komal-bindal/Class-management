import { bindActionCreators } from "redux";
import { store } from "../store";
import { UI_HEADER_TITLE } from "./actionConstants";


const uiHeaderTitleChangeAction = (title: string) => {
  return { type: UI_HEADER_TITLE, payload: title };
};

export const headerActions = bindActionCreators({uiHeaderTitleChangeAction}, store.dispatch)