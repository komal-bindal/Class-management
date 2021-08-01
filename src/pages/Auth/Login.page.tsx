import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import { FiLock, FiUser } from "react-icons/fi";

import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { login, LS_LOGIN_TOKEN } from "../../api";
import ListGroup from "../../components/ListGroup/ListGroup";

interface Props {}

const Login: React.FC<Props> = (props) => {
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
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      login(data)
        .then(() => {
          history.push("/dashboard");
          console.log("hi");
        })
        .catch((e) => {
          console.log("error", e);
          window.location.href = "/login";
        });
    },
    validationSchema: yup
      .object()
      .required()
      .shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      }),
  });
  console.log(errors.password);
  console.log(touched.password);

  return (
    <div className="flex flex-col items-start justify-center px-11 py-3 w-full max-w-100 mx-auto">
      <h1 className="text-4xl pb-2 ">
        Log In to <span className="text-blue-600">CORK</span>
      </h1>
      <h3 className="text-sm font-semibold pb-12 ">
        New here?{" "}
        <Link to="/signup">
          <span className="underline text-blue-600">Create an account</span>
        </Link>
      </h3>
      <form className="w-full text-sm" onSubmit={handleSubmit}>
        <Input
          id="email"
          placeholder="Email Id"
          touched={touched.email}
          error={errors.email}
          Icon={FiUser}
          type="email"
          {...getFieldProps("email")}
          autoComplete="email"
        ></Input>
        <Input
          id="password"
          placeholder="Password"
          touched={touched.password}
          error={errors.password}
          type="password"
          {...getFieldProps("password")}
          autoComplete="current-password"
          Icon={FiLock}
          className="mb-3"
        ></Input>
        <div className=" flex flex-col items-start  xs:flex-row xs:justify-between xs:items-center">
          <div className="pb-5 xs:pb-0">Show Password</div>
          <div className="flex items-center">
            {isSubmitting && !(errors.password || errors.email) && (
              <ImSpinner className="animate-spin mr-3"></ImSpinner>
            )}
            <Button
              disabled={!isValid}
              type="submit"
              theme="primary"
              outline={false}
              rounded={false}
            >
              Log In
            </Button>
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
