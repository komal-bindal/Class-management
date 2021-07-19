import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    id:string;
    touched?: boolean;
    error?:string;
}
const Input: React.FC<Props> = ({id, touched, placeholder, error, ...rest}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        className="pl-3 pb-3 border-b outline-none"
        id={id}
        {...rest}
        placeholder = {placeholder}
      ></input>
      {touched && (
        <div className="text-red-500">{error}</div>
      )}
      {(!error || !touched) && <div className="h-5 "></div>}
    </div>
  );
};
Input.defaultProps = {};

export default React.memo(Input);
