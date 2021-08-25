import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
import { FiLock, FiUser } from "react-icons/fi";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { login } from "../../api";
import { authActions } from "../../actions/auth.actions";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
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
        .then((u) => {
          history.push("/dashboard");
          console.log("user", u);
          authActions.meLoginAction(u);
        })
        .catch((e) => {
          setLoginError("Wrong username or password");
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
      {!loginError && <div className="h-10"></div>}
      {loginError && (
        <div className="h-10 text-red-600 text-xl">{loginError}</div>
      )}

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
          type={showPassword ? "text" : "password"}
          {...getFieldProps("password")}
          autoComplete="current-password"
          Icon={FiLock}
          className="mb-3"
        ></Input>
        <div className=" flex flex-col items-start  xs:flex-row xs:justify-between xs:items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="pb-5 xs:pb-0">Show Password</div>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className={
                " ml-4 h-4 w-8   rounded-lg " +
                (showPassword ? "bg-blue-500" : "bg-blue-100")
              }
            >
              {!showPassword && (
                <div className="w-4 rounded-full h-full bg-blue-500 "></div>
              )}
              {showPassword && (
                <div className="w-4 rounded-full h-full bg-white ml-auto"></div>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {isSubmitting &&
              !(errors.password || errors.email) &&
              !loginError && (
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
