import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import { store } from "../store";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "./actionConstants";


const groupQueryAction = (query: string) => {
  return { type: GROUP_QUERY, payload: query };
};

const groupQueryCompletedAction = (groups: Group[], query: string) => {
  return { type: GROUP_QUERY_COMPLETED, payload: { query, groups } };
};

export const groupActions = bindActionCreators({groupQueryAction, groupQueryCompletedAction}, store.dispatch)
