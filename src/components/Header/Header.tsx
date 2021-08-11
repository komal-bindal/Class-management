import React from "react";
import { useEffect } from "react";
import { headerActions } from "../../actions/header.actions";
import { sidebarActions } from "../../actions/sidebar.actions";
import { headerTitleSelector } from "../../selectors/ui.selectors";
import { useAppSelector } from "../../store";
import SettingsButton from "../Settings/SettingsButton";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const title = useAppSelector((state) => headerTitleSelector(state));
  useEffect(() => {
    if (window.location.pathname === "/recordings") {
      headerActions.uiHeaderTitleChangeAction("Recordings");
    } else if (window.location.pathname === "/dashboard") {
      headerActions.uiHeaderTitleChangeAction("Dashboard");
    }
  }, []);

  const handleClick = () => {
    sidebarActions.uiSidebarToggleAction();
  };
  return (
    <div className="bg-gray-50 sticky h-14 top-14 py-2 z-10 flex items-center justify-between">
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
