import { groupsSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const groupQuerySelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.query
);

export const groupQueryMapSelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.groupQueryMap
);

export const groupQueryByIdSelector = createSelector(
  [groupsSelector],
  (groupsState) => groupsState.byId
);

export const groupsRelatedToQuerySelector = createSelector(
  [groupQueryByIdSelector, groupQueryMapSelector, groupQuerySelector],
  (byId, queryMap, query) => {
    const groupIds: number[] = queryMap[query] || [];
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);
