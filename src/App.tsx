import { Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN, me } from "./api";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { ImSpinner } from "react-icons/im";
import { useDispatch } from "react-redux";
import { authActions } from "./actions/auth.actions";
import { useAppSelector } from "./store";

interface Props {}

const App: React.FC<Props> = () => {
  console.log("app");

  const dispatch = useDispatch();

  const user = useAppSelector((state) => {
    return state.auth.id && state.users.byId[state.auth.id];
  });
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  useEffect(() => {
    if (!token || user) {
      return;
    }

    me().then((u) => {
      authActions.meFetchAction(u);
    });
  }, []);

  if (token && !user) {
    return (
      <div className="flex flex-col justify-center items-center">
        <ImSpinner className="animate-spin h-14 w-14"></ImSpinner>
        <h1 className="text-2xl">Loading....</h1>
      </div>
    );
  }

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex flex-col justify-center items-center">
            <ImSpinner className="animate-spin h-14 w-14"></ImSpinner>
            <h1 className="text-2xl">Loading....</h1>
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthLazy />}
            </Route>

            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/batch/:batchNumber/lecture/:lectureNumber",
              ]}
              exact
            >
              {user ? <AppContainerLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
