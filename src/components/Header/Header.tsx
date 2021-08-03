import React from "react";
import { useDispatch } from "react-redux";
import {
  uiHeaderTitleChange,
  uiSidebarToggle,
  useAppSelector,
} from "../../store";
import SettingsButton from "../Settings/SettingsButton";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const title = useAppSelector((state) => state.headerTitle);
  const dispatch = useDispatch();
  if (window.location.pathname == "/recordings") {
    dispatch(uiHeaderTitleChange("Recordings"));
  } else if (window.location.pathname == "/dashboard") {
    dispatch(uiHeaderTitleChange("Dashboard"));
  }

  const handleClick = () => {
    dispatch(uiSidebarToggle());
  };
  return (
    <div className="bg-gray-50 sticky h-14 top-14 py-2 z-40 flex items-center justify-between">
      <div className="flex">
        <button className="pl-8 pr-6" onClick={handleClick}>
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
        <h2 className="text-md font-semibold">{title}</h2>
      </div>
      <SettingsButton></SettingsButton>
    </div>
  );
};
Header.defaultProps = {};

export default React.memo(Header);
