import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer, combineReducers } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { groupsReducer } from "./reducers/groups.reducer";
import { headerReducer } from "./reducers/header.reducer";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { userReducer } from "./reducers/users.reducer";

const reducer = combineReducers({
  users: userReducer,
  groups: groupsReducer,
  auth: authReducer,
  header: headerReducer,
  sidebar: sidebarReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
