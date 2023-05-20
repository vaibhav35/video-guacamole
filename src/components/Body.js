import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  return (
    <>
      {isMenuOpen ? (<div
        onClick={() => dispatch(closeMenu())}
        className="md:hidden fixed top-0 bottom-0 left-0 right-0 opacity-80  bg-black z-10"
      ></div>) :   <div></div>}
      
      <div className=" grid grid-cols-12 ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
