import React from "react";
import SidebarTab from "./SidebarTab";
import { AiOutlineHome } from "react-icons/ai";
import { logout } from "../../api";
import { BiLogOut, BiVideoRecording } from "react-icons/bi";
import { useHistory } from "react-router-dom";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  const history = useHistory();
  const goToRecordings = () => {
    history.push("/recordings");
  };
  const goToDashboard = () => {
    history.push("/dashboard");
  };
  return (
    <div
      className=" w-60 z-30  bg-gray-200 flex sticky top-28  flex-col p-3"
      style={{ height: "calc(100vh - 130px)" }}
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
  );
};
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
