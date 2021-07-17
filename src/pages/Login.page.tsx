import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import { ImSpinner } from "react-icons/im";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTouched, setIsTouched] = useState({ email: false, password: false });

  let emailError = "";
  let passwordError = "";

  if (!data.email) {
    emailError = "Email address is required";
  } else if (!data.email.includes("@")) {
    emailError = "Please enter valid email";
  }

  if (!data.password) {
    passwordError = "Password is required";
  } else if (data.password.length < 8) {
    passwordError = "Password should be atleast 8 characters";
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched({ ...isTouched, [event.target.name]: true });
  };

  return (
    <div className="flex flex-col items-start justify-center px-11 py-3 max-w-96 mx-auto">
      <h1 className="text-4xl pb-2">
        Log In to <span className="text-blue-600">DevsLane</span>
      </h1>

      <h3 className="text-sm font-semibold pb-12 ">
        New here?{" "}
        <Link to="/signup">
          <span className="underline text-blue-600">Create an account</span>
        </Link>
      </h3>

      <form
        className="w-full text-sm"
        onSubmit={(event) => {
          event.preventDefault();
          setIsSubmitting(true);
          if (emailError || passwordError) {
            return;
          }
          setTimeout(() => {
            console.log(data);
            setIsSubmitting(false);
          }, 5000);
        }}
      >
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
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <label htmlFor="email" className="sr-only">
              Email id
            </label>
            <input
              className="pl-3 pb-3 w-full border-b outline-none"
              id="email"
              type="email"
              name="email"
              placeholder="Email id"
              value={data.email}
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </div>
          {isTouched.email  && (
            <div className="text-red-500 pl-6">{emailError}</div>
          )}
          {(emailError === "" || !isTouched.email) && (
            <div className="h-5 "></div>
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
              strokeWidth="2"
              strokeLinecap="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <input
              className="pl-3 pb-3 w-full border-b outline-none"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </div>
          {isTouched.password && (
            <div className="text-red-500 pl-6">{passwordError}</div>
          )}
          {(passwordError === "" || !isTouched.password) && (
            <div className="h-5"></div>
          )}
        </div>

        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center ">
          <div className  = "flex-shrink-0 pb-5 md:pb-0">Show Password</div>
          <div className="flex items-center">
            {isSubmitting && !(passwordError || emailError) && (
              <ImSpinner className="animate-spin mr-3"></ImSpinner>
            )}
            <SubmitButton>Log In</SubmitButton>
          </div>
        </div>
        <div className="mt-14 flex justify-center mb-2">
          <input type="checkbox" id="loggedIn" className="mt-1 " />
          <label htmlFor="loggedIn" className="pl-2 text-gray-600">
            Keep me logged in{" "}
          </label>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center w-full ">
        <h2 className="text-md text-blue-600 font-semibold mt-4">
          <Link to="/forgot-password">Forgot Password?</Link>
        </h2>
        <h3 className="text-sm text-gray-600 mt-20 ">
          © 2020 All Rights Reserved.{" "}
        </h3>
      </div>
    </div>
  );
};
Login.defaultProps = {};

export default React.memo(Login);
