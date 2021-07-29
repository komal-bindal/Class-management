import React from "react";
import {logout } from "../api";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  return <div className ="h-screen w-60 bg-gray-400">
      This is side bar.
      <button onClick = {logout}>Logout</button>
  </div>;
};
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
