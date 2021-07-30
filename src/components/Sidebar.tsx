import React from "react";
import { logout } from "../api";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  const height = {};
  return (
    <div
      className=" w-60 z-30  bg-gray-200 flex sticky top-28  flex-col"
      style={{ height: "calc(100vh - 130px)" }}
    >
      This is side bar.
      <button onClick={logout}>Logout</button>
      This is side bar.
      <button onClick={logout}>Logout</button>
      This is side bar.
      <button onClick={logout}>Logout</button>
      This is side bar.
      <button onClick={logout}>Logout</button>
      This is side bar.
      <button onClick={logout}>Logout</button>
      This is side bar.
      <button onClick={logout}>Logout</button>
      This is side bar.
      <button onClick={logout}>Logout</button>
    </div>
  );
};
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
