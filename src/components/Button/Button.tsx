import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  type?: "submit" | "reset" | "button" | undefined;
  theme?: "primary" | "warning" | "success" | "info" | "error";
  rounded?: boolean;
  outline?: boolean;
}

const Button: React.FC<Props> = (props) => {
  let themeClasses = "";
  let roundedClasses = "";

  if (props.theme == "primary") {
    themeClasses = props.outline
      ? "text-indigo-600 border border-indigo-600 hover:bg-indigo-600  hover:text-white hover:shadow-2xl"
      : "text-white bg-indigo-600 shadow-2xl hover:shadow-none";
  } else if (props.theme == "warning") {
    themeClasses = props.outline
      ? "text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white hover:shadow-2xl"
      : "text-white bg-yellow-600 shadow-2xl hover:shadow-none";
  } else if (props.theme == "success") {
    themeClasses = props.outline
      ? "text-green-600 border border-green-600 hover:bg-green-600 hover:text-white hover:shadow-2xl"
      : "text-white bg-green-600 shadow-2xl hover:shadow-none";
  } else if (props.theme == "info") {
    themeClasses = props.outline
      ? "text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-2xl"
      : "text-white bg-blue-600 shadow-2xl hover:shadow-none";
  } else {
    themeClasses = props.outline
      ? "text-red-600 border border-red-600 hover:bg-red-600 hover:text-white hover:shadow-2xl"
      : "text-white bg-red-600 shadow-2xl hover:shadow-none";
  }

  roundedClasses = props.rounded ? "rounded-full" : "rounded-md";

  return (
    <button
      disabled={props.disabled}
      className={
        "text-sm py-2 px-5 flex-shrink-0 transition duration-300 ease-in-out " +
        themeClasses +
        " " +
        roundedClasses
      }
      type={props.type}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  children: "Button",
  type: "button",
  theme: "primary",
  rounded: false,
  outline: true,
};

export default React.memo(Button);
