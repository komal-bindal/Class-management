import React from "react";
import { ButtonHTMLAttributes } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
}
const Button: React.FC<Props> = (props) => {
  return (
    <button
      disabled={props.disabled}
      className="bg-blue-600 text-white text-sm py-2 px-5 flex-shrink-0 shadow-xl rounded-md "
      type="submit"
    >
      {props.children}
    </button>
  );
};
Button.defaultProps = {};

export default React.memo(Button);
