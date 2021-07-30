import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";

interface Props {
  isSettingsOpen: boolean;
}

const SeetingsMenu: React.FC<Props> = ({ isSettingsOpen }) => {
  return (
    <Transition
      show={isSettingsOpen}
      as={Fragment}
      enter="transform transition duration-100 ease-in-out"
      enterFrom="opacity-0 "
      enterTo="opacity-100 "
      leave="transform duration-100 transition ease-in-out"
      leaveFrom="opacity-100 "
      leaveTo="opacity-0 "
    >
      <div className="absolute top-14 right-5 flex flex-col w-32  border  rounded-md bg-white shadow-md text-gray-500 py-2 ">
        <button className="px-4 py-2 w-full hover:text-blue-400 text-left  hover:bg-gray-100">
          Settings
        </button>
        <button className="px-4 py-2 w-full hover:text-blue-400 text-left  hover:bg-gray-100">
          Download
        </button>
        <button className="px-4 py-2 w-full hover:text-blue-400 text-left hover:bg-gray-100">
          Share
        </button>
      </div>
    </Transition>
  );
};
SeetingsMenu.defaultProps = {};

export default React.memo(SeetingsMenu);
