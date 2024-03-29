import React, { Fragment } from "react";
import SidebarTab from "./SidebarTab";
import { AiOutlineHome } from "react-icons/ai";
import { logout } from "../../api";
import { BiLogOut, BiVideoRecording } from "react-icons/bi";
import { HiUserGroup, HiUsers } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useAppSelector } from "../../store";
import { headerActions } from "../../actions/header.actions";
import {
  headerTitleSelector,
  sidebarOpenSelector,
} from "../../selectors/ui.selectors";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  const isSidebarOpen = useAppSelector((state) => sidebarOpenSelector(state));

  const history = useHistory();
  const goToRecordings = () => {
    history.push("/recordings");
    headerActions.uiHeaderTitleChangeAction("Recordings");
  };
  const goToDashboard = () => {
    history.push("/dashboard");
    headerActions.uiHeaderTitleChangeAction("Dashboard");
  };
  const goToGroups = () => {
    history.push("/groups");
    headerActions.uiHeaderTitleChangeAction("Groups");
  };
  const goToUsers = () => {
    history.push("/users");
    headerActions.uiHeaderTitleChangeAction("Users");
  };
  const headerTitle = useAppSelector((state) => headerTitleSelector(state));

  return (
    <div>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transform transition-transform duration-1000 linear"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-1000 transition linear"
        leaveFrom="translate-x-0 "
        leaveTo="-translate-x-full "
      >
        <div
          className=" w-52 z-30  bg-gray-100 border-r-2  flex sticky top-28  flex-col p-3 "
          style={{ height: "calc(100vh - 112px)" }}
        >
          <SidebarTab
            Icon={AiOutlineHome}
            handleClick={goToDashboard}
            className={headerTitle === "Dashboard" ? "bg-white" : ""}
          >
            Dashboard
          </SidebarTab>
          <SidebarTab
            Icon={BiVideoRecording}
            handleClick={goToRecordings}
            className={headerTitle === "Recordings" ? "bg-white" : ""}
          >
            Recordings
          </SidebarTab>
          <SidebarTab
            Icon={HiUserGroup}
            handleClick={goToGroups}
            className={headerTitle === "Groups" ? "bg-white" : ""}
          >
            Groups
          </SidebarTab>
          <SidebarTab
            Icon={HiUsers}
            handleClick={goToUsers}
            className={headerTitle === "Users" ? "bg-white" : ""}
          >
            Users
          </SidebarTab>
          <SidebarTab Icon={BiLogOut} handleClick={logout} className={""}>
            Logout
          </SidebarTab>
        </div>
      </Transition>
    </div>
  );
};
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
