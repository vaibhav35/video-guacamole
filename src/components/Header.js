import React from "react";

import { ReactComponent as YoutubeSvg } from "../utils/svg/youtube.svg";
import { ReactComponent as BarsSvg } from "../utils/svg/bars.svg";
import { ReactComponent as SearchSvg } from "../utils/svg/search.svg";
import { ReactComponent as UserSvg } from "../utils/svg/user.svg";
import { useDispatch } from "react-redux";
import { toggleState } from "../utils/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="col-span-12 grid gap-2 grid-cols-12 mb-3 py-4 shadow-lg">
      <div className="col-span-2  px-2 self-center flex justify-between md:justify-evenly lg:w-2/3">
        <BarsSvg className="w-7 cursor-pointer" onClick={() => dispatch(toggleState())} />
        <YoutubeSvg className="w-10 fill-red-600" />
      </div>
      <div className="col-span-8 justify-self-stretch self-center flex">
        <input
          className=" w-3/4 px-3 border-2 rounded-l-full border-gray-500 h-10"
          type="search
          "
          placeholder="search"
        />
        <button className="border-2 bg-gray-100 border-l-0 border-gray-500 h-10 px-4 rounded-r-full ">
          <SearchSvg className="w-4" />
        </button>
      </div>
      <div className="col-span-2 self-center justify-self-end mr-5 border-2  border-gray-500 rounded-full p-1.5 ">
        <UserSvg className="w-6 " />
      </div>
    </nav>
  );
};

export default Header;
