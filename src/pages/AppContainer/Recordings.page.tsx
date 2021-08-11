import React from "react";
import { Link } from "react-router-dom";
interface Props {}
const Recordings: React.FC<Props> = (props) => {
  return (
    <div className="w-full bg-gray-100 ">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};
Recordings.defaultProps = {};

export default React.memo(Recordings);
