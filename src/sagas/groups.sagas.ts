import {
  GROUP_FETCH_ONE,
  GROUP_QUERY_CHANGED,
} from "../actions/actionConstants";
import { call, takeLatest, delay, put, all } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { fetchGroupsApi, fetchOneGroupApi } from "../api";
import {
  groupFetchOneCompletedAction,
  groupFetchOneErrorAction,
  groupQueryCompletedAction,
} from "../actions/groups.actions";

function* fetchGroups(dispatchedAction: AnyAction): Generator<any> {
  yield delay(500);
  const response: any = yield call(fetchGroupsApi, {
    query: dispatchedAction.payload.query,
    status: "all-groups",
  });
  yield put(
    groupQueryCompletedAction(
      response.data.data,
      dispatchedAction.payload.query
    )
  );
}

function* fetchOneGroup(dispatchedAction: AnyAction): Generator<any> {
  try {
    const response: any = yield call(
      fetchOneGroupApi,
      dispatchedAction.payload.id
    );
    yield put(
      groupFetchOneCompletedAction(dispatchedAction.payload.id, response)
    );
  } catch (e) {
    const error = e.response.data?.message || "Some error occured!";
    yield put(groupFetchOneErrorAction(dispatchedAction.payload.id, error));
  }
}

export function* watchGroupQueryChanged() {
  yield all([
    takeLatest(GROUP_QUERY_CHANGED, fetchGroups),
    takeLatest(GROUP_FETCH_ONE, fetchOneGroup),
  ]);
}
