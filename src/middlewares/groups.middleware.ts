import { groupActions } from "../actions/groups.actions";
import { fetchGroupsApi, GroupRequest } from "../api";
import { groupQueryLoadingSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const loadingMap = groupQueryLoadingSelector(store.getState());
  const query = request.query;
  const loading = loadingMap[query];
  groupActions.groupQueryAction(query, true);
  if (loading) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupActions.groupQueryCompletedAction(groups, query);
  });
};
