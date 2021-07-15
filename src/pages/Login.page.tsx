import React from "react";
import { Link } from "react-router-dom";
interface Props {}
const Login: React.FC<Props> = (props) => {
  return <div>
      This is login page. 
      <Link to = "/signup">Signup</Link>
      <Link to = "/dashboard">Go to dashboard</Link>
  </div>;
};
Login.defaultProps = {};

export default React.memo(Login);
