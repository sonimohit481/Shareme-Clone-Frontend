import React from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
const isNotActiveStyle =
  "flex items-center px-5 gap-3 hover:text-black text-gray-500 transition-all  duration-200 ease-in-out capatalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all  duration-200 ease-in-out capatalize";
const categories = [
  { name: "Animals" },
  { name: "Wallapapers" },
  { name: "Photography" },
  { name: "Gaming" },
  { name: "Gaming" },
];
export const Sidebar = ({ user, closeToggle }) => {
  // console.log(user);
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };
  return (
    <div className=" flex flex-col h-full min-w-210  bg-white overflow-y-scroll hide-scrollbar focus-within:shadow-md">
      <div className="flex flex-col">
        <Link
          to={"/"}
          className="flex px-5 pt-1 my-1 gap-5 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src={logo} className="w-full" />
        </Link>
        <div className="flex flex-col gap-5 mt-5">
          <NavLink
            to="/"
            className={(isActive) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={handleCloseSidebar}
          >
            <AiFillHome />
            Home
          </NavLink>
          <h3 className="px-3 mt-2 text-base 2xl:text-xl">Discover category</h3>
          {categories.slice(0, categories.length - 1).map((categories) => (
            <NavLink
              to={`/categories/${categories.name}`}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }
              onClick={handleCloseSidebar}
              key={categories.name}
            >
              {/* <IoIosArrowForward /> */}
              {categories.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link
          to={`user-profile/${user._id}`}
          className="flex my-5 mb-3 p-3 items-center gap-4"
          onClick={handleCloseSidebar}
        >
          <img
            src={user.image}
            alt="user-profile"
            className="w-10 h-10 rounded-full"
          />
          <p>{user.userName}</p>
        </Link>
      )}
    </div>
  );
};
