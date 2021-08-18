import axios, { Canceler } from "axios";
import { useDispatch } from "react-redux";
import {
  groupQueryAction,
  groupQueryCompletedAction,
} from "../actions/groups.actions";
import { fetchGroupsApi, GroupRequest } from "../api";
import { store } from "../store";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;
  store.dispatch(groupQueryAction(query, true));
  canceler && canceler();
  const { cancel, token } = axios.CancelToken.source();
  canceler = cancel;

  fetchGroupsApi(request, token).then((groups) => {
    store.dispatch(groupQueryCompletedAction(groups, query));
    canceler = undefined;
  });
};
