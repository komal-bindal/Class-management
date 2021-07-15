import React from "react";
import {Link} from "react-router-dom"
interface Props {}
const Signup: React.FC<Props> = (props) => {
  return <div>
      This is signup page.
      <Link to = "/login">Already have an account</Link>
  </div>;
};
Signup.defaultProps = {};

export default React.memo(Signup);
