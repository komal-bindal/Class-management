import React from "react";
import { Link, useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import { ImSpinner } from "react-icons/im";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Signup: React.FC<Props> = (props) => {
  const history = useHistory();
  const {
    isSubmitting,
    getFieldProps,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("submitting", data);
      setTimeout(() => {
        console.log("form submitted");
        history.push("/dashboard");
      }, 5000);
    },
    validationSchema: yup
      .object()
      .required()
      .shape({
        username: yup.string().required().min(2),
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
  });
  

  return (
    <div className="flex flex-col items-start justify-center px-11 py-3 mx-auto max-w-130">
      <h1 className="text-4xl pb-2 ">Get started with a free account</h1>
      <h3 className="text-sm font-semibold pb-12 ">
        Already have an account?{" "}
        <Link to="/login">
          <span className="underline text-blue-600">Log in</span>
        </Link>
      </h3>

      <form className="w-full text-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col pt-2">
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
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              className="pl-3 pb-3 w-full border-b outline-none"
              id="username"
              type="username"
              placeholder="Username"
              {...getFieldProps("username")}
            ></input>
          </div>
          {touched.username && (
            <div className="text-red-500 pl-6">{errors.username}</div>
          )}
          {(!errors.username || !touched.username) && (
            <div className="h-5 "></div>
          )}
        </div>
        <div className="flex flex-col pt-2">
          <div className="flex">
            <svg
              className="text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
            </svg>
            <label htmlFor="email" className="sr-only">
              Email id
            </label>
            <input
              className="pl-3 pb-3 w-full border-b outline-none"
              id="email"
              type="email"
              placeholder="Email id"
              autoComplete="email"
              {...getFieldProps("email")}
            ></input>
          </div>
          {touched.email && (
            <div className="text-red-500 pl-6">{errors.email}</div>
          )}
          {(!errors.email || !touched.email) && <div className="h-5 "></div>}
        </div>
        <div className="flex flex-col pt-2 mb-3">
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
              placeholder="Password"
              {...getFieldProps("password")}
              autoComplete="current-password"
            ></input>
          </div>
          {touched.password && (
            <div className="text-red-500 pl-6">{errors.password}</div>
          )}
          {(!errors.password || !touched.password) && (
            <div className="h-5"></div>
          )}
        </div>
        <div className="flex  mb-5">
          <input type="checkbox" id="loggedIn" className="mt-1 " />
          <label htmlFor="loggedIn" className="pl-2  text-sm text-blue-600">
            I agree to the terms and conditions
          </label>
        </div>
        <div className="flex flex-col items-start  xs:flex-row xs:justify-between xs:items-center">
          <div className="pb-5 xs:pb-0">Show Password</div>
          <div className="flex items-center">
            {isSubmitting && !(errors.password || errors.email) && (
              <ImSpinner className="animate-spin mr-3"></ImSpinner>
            )}
            <SubmitButton disabled={!isValid}>Get Started!</SubmitButton>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center w-full ">
        <h3 className="text-sm text-gray-600 mt-20 ">
          © 2020 All Rights Reserved.{" "}
        </h3>
      </div>
    </div>
  );
};
Signup.defaultProps = {};

export default React.memo(Signup);
