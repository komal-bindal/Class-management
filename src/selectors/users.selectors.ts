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
