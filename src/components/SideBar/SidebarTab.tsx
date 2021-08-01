import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType;
  handleClick?: () => void;
}
const SidebarTab: React.FC<Props> = ({ Icon, handleClick, children }) => {
  return (
    <button
      className="flex px-4 py-3 my-1 border border-gray-500 items-center hover:bg-gray-400 rounded-lg"
      onClick={handleClick}
    >
      {Icon && <Icon className="h-6 w-6"></Icon>}
      <h3 className="text-md font-semibold pl-4">{children}</h3>
    </button>
  );
};
SidebarTab.defaultProps = {};

export default React.memo(SidebarTab);
