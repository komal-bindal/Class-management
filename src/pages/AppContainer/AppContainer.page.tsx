import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import DashboardPage from "./Dashboard.page";
import GroupDetailsPage from "./GroupDetails.page";
import GroupsPage from "./Groups.page";
import LecturePage from "./Lecture.page";
import ProfilePage from "./Profile.page";
import RecordingsPage from "./Recordings.page";
import UserDetailsPage from "./UserDetails.page";
import UsersPage from "./Users.page";

interface Props {}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="relative bg-gray-100 min-h-screen ">
      <TopBar />
      <Header />
      <div className="flex relative">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/recordings">
            <RecordingsPage />
          </Route>
          <Route path="/groups" exact>
            <GroupsPage />
          </Route>
          <Route path="/groups/id/:id">
            <GroupDetailsPage></GroupDetailsPage>
          </Route>
          <Route path="/users" exact>
            <UsersPage></UsersPage>
          </Route>
          <Route path="/users/id/:id">
            <UserDetailsPage></UserDetailsPage>
          </Route>
          <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
          </Route>
          <Route path="/profile">
            <ProfilePage></ProfilePage>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
AppContainer.defaultProps = {};

export default React.memo(AppContainer);
