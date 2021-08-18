import { GROUP_QUERY_CHANGED } from "../actions/actionConstants";
import { call, takeLatest, delay, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { fetchGroupsApi } from "../api";
import { groupQueryCompletedAction } from "../actions/groups.actions";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(500);
  const response: any = yield call(fetchGroupsApi, {
    query: action.payload.query,
    status: "all-groups",
  });
  yield put(
    groupQueryCompletedAction(response.data.data, action.payload.query)
  );
}

export function* watchGroupQueryChanged() {
  yield takeLatest(GROUP_QUERY_CHANGED, fetchGroups);
}
