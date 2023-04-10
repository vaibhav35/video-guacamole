import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="h-screen col-span-2 border-2 border-gray-600 px-1 py-3">
      <ul
        className="px-3 py-2
      "
      >
        <li>Home </li>
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
  );
};

export default Sidebar;
