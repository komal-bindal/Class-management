import { groupActions } from "../actions/groups.actions";
import { fetchGroupsApi, GroupRequest } from "../api";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryMap = groupQueryMapSelector(store.getState());
  const query = request.query;
  const groupIds = queryMap[query];
  groupActions.groupQueryAction(query, !groupIds);
  if (groupIds) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupActions.groupQueryCompletedAction(groups, query);
  });
};
