import React from "react";
import { Link, useHistory } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import { ImSpinner } from "react-icons/im";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input/Input";
import { FiLock, FiUser } from "react-icons/fi";
import {HiOutlineAtSymbol} from "react-icons/hi"
import Button from "../components/Button/Button";

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
    <div className="flex flex-col items-start justify-center px-11 py-3 mx-auto w-full max-w-100">
      <h1 className="text-4xl pb-2 ">Get started with a free account</h1>
      <h3 className="text-sm font-semibold pb-12 ">
        Already have an account?{" "}
        <Link to="/login">
          <span className="underline text-blue-600">Log in</span>
        </Link>
      </h3>

      <form className="w-full text-sm" onSubmit={handleSubmit}>
          <Input
            id="username"
            placeholder="Username"
            touched={touched.username}
            error={errors.username}
            type="text"
            {...getFieldProps("username")}
            Icon = {FiUser}
          ></Input>
          <Input
            id="email"
            placeholder="Email Id"
            touched={touched.email}
            error={errors.email}
            type="email"
            {...getFieldProps("email")}
            autoComplete="email"
            Icon = {HiOutlineAtSymbol}
          ></Input>
          <Input
            id="password"
            placeholder="Password"
            touched={touched.password}
            error={errors.password}
            type="password"
            {...getFieldProps("password")}
            autoComplete="new-password"
            Icon = {FiLock}
            className = "mb-3"
          ></Input>
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
            <Button disabled={!isValid} type = "submit" theme = "primary" outline = {false} rounded = {false}>Get Started!</Button>
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
