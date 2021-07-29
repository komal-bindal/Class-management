import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar/TopBar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";
interface Props {}
const AppContainer: React.FC<Props> = (props) => {
  return (<div>
    <TopBar/>
    <div className = "flex">
        <Sidebar/>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path = "/recordings">
            <RecordingsPage/>
        </Route>
        <Route path = "/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage/>
        </Route>
      </Switch>

    </div></div>
  );
};
AppContainer.defaultProps = {};

export default React.memo(AppContainer);
