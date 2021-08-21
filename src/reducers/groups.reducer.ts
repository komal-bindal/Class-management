import { AnyAction, Reducer } from "redux";
import {
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETED,
  GROUP_FETCH_ONE_ERROR,
  GROUP_QUERY_CHANGED,
  GROUP_QUERY_COMPLETED,
} from "../actions/actionConstants";
import { Group } from "../models/Group";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
} from "./entity.reducer";

export interface GroupsState extends EntityState<Group> {
  query: string;
  groupQueryMap: { [query: string]: number[] };
}

const initialState: GroupsState = {
  ...initialEntityState,
  query: "",
  groupQueryMap: {},
};

export const groupsReducer: Reducer<GroupsState, AnyAction> = (
  currentState = initialState,
  dispatchedAction
) => {
  switch (dispatchedAction.type) {
    case GROUP_QUERY_CHANGED:
      const query = dispatchedAction.payload.query;
      const loadingList = dispatchedAction.payload.loading;
      return {
        ...currentState,
        query,
        loadingList: loadingList,
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
        loadingList: false,
      };
    case GROUP_FETCH_ONE:
      return {
        ...currentState,
        selectedId: dispatchedAction.payload.id,
        selectedIdLoading: dispatchedAction.payload.selectedIdLoading,
        selectedIdError: undefined,
      };
    case GROUP_FETCH_ONE_COMPLETED:
      return addOne(
        currentState,
        dispatchedAction.payload.group,
        false
      ) as GroupsState;
    case GROUP_FETCH_ONE_ERROR:
      const error =
        dispatchedAction.payload.id === currentState.selectedId
          ? dispatchedAction.payload.error
          : undefined;
      return {
        ...currentState,
        selectedIdLoading: false,
        selectedIdError: error,
      };
    default:
      return currentState;
  }
};
