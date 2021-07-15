import React from "react";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  return <div className ="h-screen w-60 bg-gray-400">
      This is side bar.
  </div>;
};
Sidebar.defaultProps = {};

export default React.memo(Sidebar);
