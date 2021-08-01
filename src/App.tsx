import { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { ImSpinner } from "react-icons/im";
import { User } from "./models/User";
import { useState } from "react";

interface Props {}

const App: React.FC<Props> = () => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
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
              {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup"]} exact>
              {token ? (
                <Redirect to="/dashboard" />
              ) : (
                <AuthLazy onLogin={(u) => setUser(u)} />
              )}
            </Route>

            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/batch/:batchNumber/lecture/:lectureNumber",
              ]}
              exact
            >
              {token ? <AppContainerLazy /> : <Redirect to="/login" />}
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
