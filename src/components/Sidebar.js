import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="max-md:sidebar-small-screen max-sm:w-screen-70 max-md:w-screen-45 md:col-span-2 md:border-2  md:border-gray-600  md:px-1 md:py-3 ">
      <div className="">
        <ul className="px-3 py-2">
          <li> <Link to={"/"}>Home</Link>  </li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>

        <div className="border-t-2 border-gray-700 py-3 ">
          <ul className="px-3">
            <li>Library</li>
            <li>History</li>
            <li>Your videos</li>
            <li>Watch Later</li>
            <li>Liked videos</li>
          </ul>
        </div>
        <h2 className="font-bold text-xl px-2">Explore</h2>
        <ul className="px-3 ">
          <li>Trending</li>
          <li>Movies</li>
          <li>Music</li>
          <li>Live</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
