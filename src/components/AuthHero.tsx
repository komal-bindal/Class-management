import React from "react";
import heroIcon from "../images/hero-icon.webp"
interface Props {}
const AuthHero: React.FC<Props> = (props) => {
  return <div className = "bg-black text-white w-1/2 h-screen flex items-center justify-center">
      <img src = {heroIcon} className = "h-3/4 w-3/4 "/>
  </div>;
};
AuthHero.defaultProps = {};

export default React.memo(AuthHero);
