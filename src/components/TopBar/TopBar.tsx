import React from "react";
import { BsBell } from "react-icons/bs";
import { FiMail, FiSearch } from "react-icons/fi";
import dummyAvatar from "../../images/dummy-avatar.jpg";
interface Props {}

const TopBar: React.FC<Props> = () => {
  return (
    <div className="bg-dark-blue h-14 py-1 flex justify-between sticky z-20 top-0 ">
      <div className="flex justify-between">
        <div className="pl-3 flex items-center max-w-50 ">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 672 723"
            className="h-9 w-9"
          >
            <g>
              <g>
                <path
                  className="fill-white"
                  d="M213.9,584.4c-47.4-25.5-84.7-60.8-111.8-106.1C75,433.1,61.4,382,61.4,324.9c0-57,13.6-108.1,40.7-153.3
			S166.5,91,213.9,65.5s100.7-38.2,159.9-38.2c49.9,0,95,8.8,135.3,26.3s74.1,42.8,101.5,75.7l-85.5,78.9
			c-38.9-44.9-87.2-67.4-144.7-67.4c-35.6,0-67.4,7.8-95.4,23.4s-49.7,37.4-65.4,65.4c-15.6,28-23.4,59.8-23.4,95.4
			s7.8,67.4,23.4,95.4s37.4,49.7,65.4,65.4c28,15.6,59.7,23.4,95.4,23.4c57.6,0,105.8-22.7,144.7-68.2l85.5,78.9
			c-27.4,33.4-61.4,58.9-102,76.5c-40.6,17.5-85.8,26.3-135.7,26.3C314.3,622.7,261.3,809.9,213.9,584.4z"
                />
              </g>
              <circle cx="375.4" cy="322.9" r="100" className="fill-yellow" />
            </g>
          </svg>
          <h1 className="text-2xl text-white font-bold px-3 ">CORK</h1>
        </div>
        <div className="md:w-96 md:bg-gray-700 flex items-center md:rounded-lg m-1">
          <FiSearch className="h-5 w-5 text-gray-200 m-2"></FiSearch>
          <input
            placeholder="Search..."
            className=" hidden md:block bg-gray-700 w-full px-1 outline-none text-white"
          ></input>
        </div>
      </div>
      <div className="flex text-white px-5 items-center">
        <FiMail className="h-5 w-5" />
        <BsBell className="h-5 w-5 ml-5"></BsBell>
        <img src={dummyAvatar} className="h-7 w-7 ml-5 rounded-md" />
      </div>
    </div>
  );
};
TopBar.defaultProps = {};

export default React.memo(TopBar);