import React from "react";

interface Props {
  theme?: "primary" | "warning" | "success" | "info" | "error";
  progress?: number;
}

const ProgressBar: React.FC<Props> = ({ progress, theme }) => {
  let themeClasses = "";
  if (theme === "primary") {
    themeClasses = "bg-indigo-600";
  } else if (theme === "warning") {
    themeClasses = "bg-yellow-600";
  } else if (theme === "success") {
    themeClasses = "bg-green-600";
  } else if (theme === "info") {
    themeClasses = "bg-blue-600";
  } else {
    themeClasses = "bg-red-600";
  }
  return (
    <div className="max-w-3xl w-full relative bg-gray-200 h-3 rounded-lg ">
      <div
        className={"h-full absolute rounded-lg " + themeClasses}
        style={{ width: progress + "%" }}
      ></div>
    </div>
  );
};
ProgressBar.defaultProps = {
  progress: 0,
  theme: "primary",
};

export default React.memo(ProgressBar);
