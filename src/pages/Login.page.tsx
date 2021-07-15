import React from "react";
import { Link } from "react-router-dom";
interface Props {}
const Login: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-start px-11 py-3 max-w-96 mx-auto">
      <h1 className="text-4xl mb-2">
        Log In to <span className="text-blue-600">DevsLane</span>
      </h1>
      <h3 className="font-semibold mb-12 ">
        New here?{" "}
        <span className="underline text-blue-600">Create an account</span>
      </h3>
      <form className = "w-full">
        <div className="flex  border-b  mt-3 mb-6">
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
          <input className="pl-3 pb-3 w-full" placeholder="email"></input>
        </div>
        <div className="flex  border-b mt-3 mb-8">
          <svg
          className = "text-blue-500"
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
          <input className="pl-3 pb-3 w-full" placeholder="Password"></input>
        </div>
      </form>
    </div>
  );
};
Login.defaultProps = {};

export default React.memo(Login);
