import React from "react";
interface Props {}
const Signup: React.FC<Props> = (props) => {
  return <div>
      This is signup page.
  </div>;
};
Signup.defaultProps = {};

export default React.memo(Signup);
