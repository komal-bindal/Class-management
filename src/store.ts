import { TypedUseSelectorHook, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupsReducer } from "./reducers/groups.reducer";
import { headerReducer } from "./reducers/header.reducer";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { userReducer } from "./reducers/users.reducer";
import { sagaMiddleware } from "./sagas";
import { watchGroupQueryChanged } from "./sagas/groups.sagas";

const reducer = combineReducers({
  users: userReducer,
  groups: groupsReducer,
  auth: authReducer,
  header: headerReducer,
  sidebar: sidebarReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGroupQueryChanged);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
