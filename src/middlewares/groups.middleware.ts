import axios, { Canceler } from "axios";
import { groupActions } from "../actions/groups.actions";
import { fetchGroupsApi, GroupRequest } from "../api";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  groupActions.groupQueryAction(query, true);
  canceler && canceler();
  const { cancel, token } = axios.CancelToken.source();
  canceler = cancel;

  fetchGroupsApi(request, token).then((groups) => {
    groupActions.groupQueryCompletedAction(groups, query);
    canceler = undefined;
  });
};
