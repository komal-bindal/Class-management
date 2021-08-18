import { GROUP_QUERY_CHANGED } from "../actions/actionConstants";
import { call, takeEvery, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { fetchGroupsApi } from "../api";
import { groupQueryCompletedAction } from "../actions/groups.actions";

function* fetchGroups(action: AnyAction): Generator<any> {
  const output: any = yield call(fetchGroupsApi, {
    query: action.payload.query,
    status: "all-groups",
  });
  yield put(groupQueryCompletedAction(output, action.payload.query));
}

export function* watchGroupQueryChanged() {
  yield takeEvery(GROUP_QUERY_CHANGED, fetchGroups);
}
