import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import SettingsMenu from "./SettingsMenu";

interface Props {}

const SettingsButton: React.FC<Props> = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const handleClick = () => {
    setSettingsOpen(!isSettingsOpen);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="h-9 w-28 bg-white border text-gray-500 mr-5 rounded-md flex items-center justify-center"
      >
        <h3 className="text-sm">Settings</h3>
        <BiChevronDown
          className={
            "h-5 w-5 ml-3 transition-transform transform " +
            (isSettingsOpen ? "rotate-180" : "rotate-0")
          }
        ></BiChevronDown>
      </button>
      <SettingsMenu isSettingsOpen={isSettingsOpen}></SettingsMenu>
    </div>
  );
};
SettingsButton.defaultProps = {};

export default React.memo(SettingsButton);
