import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  touched?: boolean;
  error?: string;
  Icon?: IconType;
  className?: string;
}
const Input: React.FC<Props> = ({
  id,
  touched,
  placeholder,
  error,
  Icon,
  className,
  ...rest
}) => {
  return (
    <div className={"flex pt-2 w-full " + className}>
      {Icon && <Icon className="h-6 w-6 text-blue-600 fill-blue"/>}
      <div className="flex flex-col w-full">
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
        <input
          className="pl-3 pb-3 border-b outline-none"
          id={id}
          {...rest}
          placeholder={placeholder}
        ></input>
        {touched && <div className="text-red-500">{error}</div>}
        {(!error || !touched) && <div className="h-5 "></div>}
      </div>
    </div>
  );
};
Input.defaultProps = {};

export default React.memo(Input);
