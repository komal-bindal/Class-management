import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import { User } from "../../models/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {
  user: User;
}

const AppContainer: React.FC<Props> = (props) => {
  let title = "";
  if (window.location.pathname == "/dashboard") {
    title = "Dashboard";
  } else if (window.location.pathname == "/recordings") {
    title = "Recordings";
  } else if (
    window.location.pathname == "/batch/:batchNumber/lecture/:lectureNumber"
  ) {
    title = "Recordings/Lecture";
  }
  return (
    <div className="relative">
      <TopBar />
      <Header title={title} />
      <div className="flex relative">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage user={props.user} />
          </Route>
          <Route path="/recordings">
            <RecordingsPage />
          </Route>
          <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
AppContainer.defaultProps = {};

export default React.memo(AppContainer);
