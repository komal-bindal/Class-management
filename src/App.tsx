import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./api";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";
function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {token ? <Redirect to="/dashboard" /> : <AuthPage />}
          </Route>

          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            {token ? <AppContainerPage /> : <Redirect to="/login" />}
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
