import { AnyAction, Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_COMPLETED } from "../actions/actionConstants";
import { Group } from "../models/Group";

export interface GroupsState {
  query: string;
  groupQueryMap: { [query: string]: number[] };
  byId: { [id: number]: Group };
}

const initialState: GroupsState = {
  query: "",
  groupQueryMap: {},
  byId: {},
};

export const groupsReducer: Reducer<GroupsState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
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
        byId: { ...currentState.byId, ...queryMap },
        groupQueryMap: {
          ...currentState.groupQueryMap,
          [dispatchedAction.payload.query]: groupIds,
        },
      };
    default:
      return currentState;
  }
};
