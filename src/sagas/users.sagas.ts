import { USERS_FETCH, USER_FETCH_ONE } from "../actions/actionConstants";
import {
  takeEvery,
  call,
  put,
  all,
  takeLatest,
} from "@redux-saga/core/effects";
import { fetchOneUserApi, fetchUsersApi } from "../api/users";
import { AnyAction } from "redux";
import {
  fetchUsersCompletedAction,
  userFetchOneCompletedAction,
  userFetchOneErrorAction,
} from "../actions/users.actions";

function* fetchUsers(dispatchedAction: AnyAction): Generator<any> {
  try {
    const users: any = yield call(fetchUsersApi);
    yield put(fetchUsersCompletedAction(users, false));
  } catch (e) {
    console.log(e);
  }
}
function* fetchOneUser(dispatchedAction: AnyAction): Generator<any> {
  try {
    const user: any = yield call(fetchOneUserApi, dispatchedAction.payload.id);
    yield put(userFetchOneCompletedAction(dispatchedAction.payload.id, user));
  } catch (e) {
    const error = e.response.data?.message || "Some error occured!";
    yield put(userFetchOneErrorAction(dispatchedAction.payload.id, error));
  }
}

export function* watchUsers() {
  yield all([
    takeEvery(USERS_FETCH, fetchUsers),
    takeLatest(USER_FETCH_ONE, fetchOneUser),
  ]);
}
