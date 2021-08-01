import { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN, me } from "./api";
import AppContainerLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthLazy from "./pages/Auth/Auth.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { ImSpinner } from "react-icons/im";
import { User } from "./models/User";
import { useState } from "react";
import { useEffect } from "react";

interface Props {}

const App: React.FC<Props> = () => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  useEffect(() => {
    if (!token || user) {
      return;
    }
    if (token) {
      me().then((u) => {
        setUser(u);
        console.log("user", u.first_name);
      });
    }
  }, []);

  if(token && !user){
    return <div className="flex flex-col justify-center items-center">
    <ImSpinner className="animate-spin h-14 w-14"></ImSpinner>
    <h1 className="text-2xl">Loading....</h1>
  </div>
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
              {user ? (
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
              {user ? (
                <AppContainerLazy user={user!} />
              ) : (
                <Redirect to="/login" />
              )}
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
