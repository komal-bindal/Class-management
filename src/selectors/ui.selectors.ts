import { createSelector } from "reselect";
import { headerSelector, sidebarSelector } from "./app.selectors";

export const sidebarOpenSelector = createSelector(
  [sidebarSelector],
  (sidebar) => sidebar.isSidebarOpen
);

export const headerTitleSelector = createSelector(
  [headerSelector],
  (haeder) => haeder.title
);
