import React from "react";
interface Props {}
const AuthHero: React.FC<Props> = (props) => {
  return <div className = "bg-black text-white w-1/2 h-screen">
      Logo will go here.
  </div>;
};
AuthHero.defaultProps = {};

export default React.memo(AuthHero);
