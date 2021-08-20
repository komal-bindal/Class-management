import { groupsSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const groupQuerySelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.query
);

export const groupQueryLoadingSelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.loadingList
);

export const groupQueryMapSelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.groupQueryMap
);

export const groupByIdSelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.byId
);

export const groupSelectedIdSelector = createSelector(
  [groupsSelector],
  (groupState) => groupState.selectedId
);

export const groupSelectedIdLoadingSelector = createSelector(
  [groupsSelector],
  (groupState) => groupState.selectedIdLoading
);

export const groupSelectedIdErrorSelector = createSelector(
  [groupsSelector],
  (groupState) => groupState.selectedIdError
);

export const selectedGroupSelector = createSelector(
  [groupSelectedIdSelector, groupByIdSelector],
  (selectedId, byId) => {
    return byId[selectedId!];
  }
);

export const groupsRelatedToQuerySelector = createSelector(
  [groupByIdSelector, groupQueryMapSelector, groupQuerySelector],
  (byId, queryMap, query) => {
    const groupIds: number[] = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);
