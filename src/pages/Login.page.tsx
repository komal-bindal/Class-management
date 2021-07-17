import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [onClickValue, setOnClickValue] = useState(false);
  console.log(onClickValue);

  return (
    <div className="flex flex-col items-start px-11 py-3 max-w-96 mx-auto">
      <h1 className="text-4xl pb-2">
        Log In to <span className="text-blue-600">DevsLane</span>
      </h1>

      <h3 className="text-sm font-semibold pb-12 ">
        New here?{" "}
        <Link to="/signup">
          <span className="underline text-blue-600">Create an account</span>
        </Link>
      </h3>

      <form className="w-full text-sm">
        <div className="flex flex-col pt-4">
          <div className="flex">
            <svg
              className="text-blue-500 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              className="pl-3 pb-3 w-full border-b outline-none"
              type="email"
              name="email"
              placeholder="Email id"
            ></input>
          </div>
          {onClickValue ? (
            <div className="text-red-500 pl-6">Please enter email</div>
          ) : (
            <div className="h-5"></div>
          )}
        </div>
        <div className="flex flex-col pt-4 mb-3">
          <div className="flex">
            <svg
              className="text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>

            <input
              className="pl-3 pb-3 w-full border-b outline-none"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
          {onClickValue ? (
            <div className="text-red-500 pl-6">Please enter email</div>
          ) : (
            <div className="h-5"></div>
          )}
        </div>
      </form>
      <button
        className="bg-blue-200"
        onClick={() => setOnClickValue(!onClickValue)}
      >
        Click
      </button>
    </div>
  );
};
Login.defaultProps = {};

export default React.memo(Login);
