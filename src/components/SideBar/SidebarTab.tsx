import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType;
  handleClick?: () => void;
  className: string;
}
const SidebarTab: React.FC<Props> = ({
  Icon,
  handleClick,
  children,
  className,
}) => {
  return (
    <button
      className={
        "flex px-4 py-3 my-1 items-center text-gray-600 hover:bg-gray-300 hover:text-black rounded-lg  duration-500 ease-in-out transition-colors " +
        className
      }
      onClick={handleClick}
    >
      {Icon && <Icon className="h-6 w-6 "></Icon>}
      <h3 className="text-md font-semibold pl-4 ">{children}</h3>
    </button>
  );
};
SidebarTab.defaultProps = {};

export default React.memo(SidebarTab);
