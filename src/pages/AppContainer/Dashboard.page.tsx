import React from "react";
import { authUserSelector } from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const user = useAppSelector((state) => authUserSelector(state));

  return (
    <div
      className="p-10 bg-gray-100 w-full"
    >
      <h1 className=" text-2xl ">Hello... {user!.first_name}</h1>
      <h3>This is Dashboard</h3>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
