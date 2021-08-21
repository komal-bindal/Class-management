import { createSelector } from "reselect";
import { usersSelector } from "./app.selectors";
import { authIdSelector } from "./auth.selectors";

export const usersByIdSelector = createSelector(
  [usersSelector],
  (usersState) => usersState.byId
);

export const authUserSelector = createSelector(
  [usersByIdSelector, authIdSelector],
  (byId, id) => {
    return id === 0 || id === undefined ? undefined : byId[id];
  }
);

export const usersLoadingListSelector = createSelector(
  [usersSelector],
  (usersState) => usersState.loadingList
);

export const usersListSelector = createSelector(
  [usersSelector],
  (usersState) => usersState.list
);
export const userSelectedIdSelector = createSelector(
  [usersSelector],
  (userState) => userState.selectedId
);

export const userSelectedIdLoadingSelector = createSelector(
  [usersSelector],
  (userState) => userState.selectedIdLoading
);

export const userSelectedIdErrorSelector = createSelector(
  [usersSelector],
  (userState) => userState.selectedIdError
);

export const selectedUserSelector = createSelector(
  [userSelectedIdSelector, usersByIdSelector],
  (selectedId, byId) => {
    return byId[selectedId!];
  }
);
