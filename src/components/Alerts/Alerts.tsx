import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
interface Props {
  title?: string;
  children?: string;
  textTheme?: "primary" | "warning" | "success" | "info" | "error";
  theme?: "outline" | "solid";
}
const Alerts: React.FC<Props> = ({ title, children, textTheme, theme }) => {
  let className = "";
  const [isClose, setIsClose] = useState(false);
  const handleClick = () => {
    setIsClose(true);
  };
  if (textTheme == "primary") {
    className =
      theme == "solid"
        ? "text-indigo-600 bg-indigo-100"
        : "text-gray-600 border border-indigo-600";
  }else if (textTheme == "warning") {
    className =
      theme == "solid"
        ? "text-yellow-600 bg-yellow-100"
        : "text-gray-600 border border-yellow-600";
  }else if (textTheme == "success") {
    className =
      theme == "solid"
        ? "text-green-600 bg-green-100"
        : "text-gray-600 border border-green-600";
  }else if (textTheme == "info") {
    className =
      theme == "solid"
        ? "text-blue-600 bg-blue-100"
        : "text-gray-600 border border-blue-600";
  }else {
    className =
      theme == "solid"
        ? "text-red-600 bg-red-100"
        : "text-gray-600 border border-red-600";
  }
  return (
    <div>
      {!isClose && (
        <div
          className={
            "flex justify-between p-4 rounded-lg items-center w-full " +
            className
          }
        >
          <div className="text-sm w-full max-w-2xl">
            <strong>{title}</strong> {children}
          </div>
          <button type="button" onClick={handleClick}>
            <IoClose />
          </button>
        </div>
      )}
    </div>
  );
};
Alerts.defaultProps = {
  textTheme: "primary",
  theme: "solid",
  children: "Lorem Ipsum is simply dummy text of the printing",
  title: "Primary!",
};

export default React.memo(Alerts);
