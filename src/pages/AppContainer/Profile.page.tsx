import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { authUserSelector } from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}
const Profile: React.FC<Props> = () => {
  const user = useAppSelector(authUserSelector);
  const firstName = user?.first_name;
  return (
    <div className="bg-white m-5 w-full p-5">
      <h1 className="text-xl mb-5 font-bold">General Information</h1>
      <div className="flex flex-col lg:flex-row">
        <img
          className="h-20 w-20 rounded-full mr-8"
          src="https://www.pngitem.com/pimgs/m/537-5372558_flat-man-icon-png-transparent-png.png"
        ></img>
        <div className="flex flex-col mr-10 max-w-max ">
          <h2>First Name</h2>
          <Input id="First Name"  placeholder={user?.first_name}></Input>
        </div>
        <div className="flex flex-col mr-10 max-w-max">
          <h2>Middle Name</h2>
          <Input id="Middle Name"  placeholder={user?.middle_name}></Input>
        </div>
        <div className="flex flex-col mr-10 max-w-min">
          <h2>Last Name</h2>
          <Input id="Last Name" placeholder={user?.last_name}></Input>
        </div>
      </div>
      <div className="max-w-max lg:ml-28">
        <h2 className="pl-2">Role</h2>
        <Input id="Role" placeholder={user?.role}></Input>
      </div>
      <div>
          <h2 className ="pb-2">Description</h2>
          <input type = "text" placeholder = "Description" className ="p-4 h-28 w-full border-2 "></input>
          </div>
          <div className = "flex justify-between mt-5">
              <Button type = "reset" outline = {false} theme="warning">Reset</Button>
              <Button type = "submit" outline = {false} theme = "success">Save</Button>
          </div>
    </div>
  );
};
Profile.defaultProps = {};
export default React.memo(Profile);
