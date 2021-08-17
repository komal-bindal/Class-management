import { AnyAction, Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../actions/actionConstants";
import { Group } from "../models/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupsState extends EntityState<Group> {
  query: string;
  groupQueryMap: { [query: string]: number[] };
  loading: boolean;
}

const initialState: GroupsState = {
  query: "",
  groupQueryMap: {},
  byId: {},
  loading: false,
};

export const groupsReducer: Reducer<GroupsState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case GROUP_QUERY:
      const query = dispatchedAction.payload.query;
      const loading = dispatchedAction.payload.loading;
      return {
        ...currentState,
        query,
        loading: loading,
      };
    case GROUP_QUERY_COMPLETED:
      const groups = dispatchedAction.payload.groups as Group[];
      const groupIds: number[] = getIds(groups);
      const newState = addMany(currentState, groups) as GroupsState;
      return {
        ...newState,
        groupQueryMap: {
          ...newState.groupQueryMap,
          [dispatchedAction.payload.query]: groupIds,
        },
        loading: false,
      };
    default:
      return currentState;
  }
};
