import React from "react";
import image1 from "../../images/dummy-avatar.jpg";
interface Props {
  size?: "sm" | "md" | "lg";
  indicator?: boolean;
  shape?: "circular" | "rounded";
  className?: string;
}
const Avatar: React.FC<Props> = ({ size, indicator, shape, className }) => {
  let sizeClasses = "";
  let shapeClasses = shape === "circular" ? "rounded-full" : "rounded-lg";
  if (size === "sm") {
    sizeClasses = "h-6 w-6";
  } else if (size == "md") {
    sizeClasses = "h-12 w-12";
  } else {
    sizeClasses = "h-20 w-20";
  }
  return (
    <div
      className={
        "hover:transform hover:-translate-y-2 ease-in-out duration-200 cursor-pointer border-2 border-white overflow-hidden " +
        sizeClasses +
        " " +
        shapeClasses +
        " " +
        className
      }
    >
      <img src={image1} className="h-full w-full object-cover"></img>
    </div>
  );
};
Avatar.defaultProps = {
  size: "lg",
  shape: "circular",
  indicator: false,
};

export default React.memo(Avatar);
