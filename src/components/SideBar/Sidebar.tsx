import React, { Fragment } from "react";
import SidebarTab from "./SidebarTab";
import { AiOutlineHome } from "react-icons/ai";
import { logout } from "../../api";
import { BiLogOut, BiVideoRecording } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  console.log("sidebar rerender");
  const dispatch = useDispatch();

  const isSidebarOpen = useAppSelector((state) => state.isSidebarOpen);
  console.log("sidebar", isSidebarOpen);

  const history = useHistory();
  const goToRecordings = () => {
    history.push("/recordings");
    dispatch({ type: "ui/headerTitle", payload: "Recordings" });
  };
  const goToDashboard = () => {
    history.push("/dashboard");
    dispatch({ type: "ui/headerTitle", payload: "Dashboard" });
  };
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
          className=" w-60 z-30  bg-gray-200 flex sticky top-28  flex-col p-3 "
          style={{ height: "calc(100vh - 112px)" }}
        >
          <SidebarTab Icon={AiOutlineHome} handleClick={goToDashboard}>
            Dashboard
          </SidebarTab>
          <SidebarTab Icon={BiVideoRecording} handleClick={goToRecordings}>
            Recordings
          </SidebarTab>
          <SidebarTab Icon={BiLogOut} handleClick={logout}>
            Logout
          </SidebarTab>
        </div>
      </Transition>
    </div>
  );
};
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
