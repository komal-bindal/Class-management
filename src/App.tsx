import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import LoginPage from "./pages/Login.page";
import NotFoundPage from "./pages/NotFound.page";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login">
              <LoginPage></LoginPage>
            </Redirect>
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage />
          </Route>

          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            <AppContainerPage />
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
