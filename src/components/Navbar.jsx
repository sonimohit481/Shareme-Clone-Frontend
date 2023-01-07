import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch, IoMdAdd } from "react-icons/io";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  console.log(user.user.image);
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="flex gap-2 md:gap-5 mt-5 w-fill">
      <div className="flex border-none outline-none justify-start items-center px-5 w-full bg-white rounded-md">
        <IoMdSearch fontSize={21} className=" ml-1" />
        <input
          type={"text"}
          onChange={(e) => {
            console.log(e.target.value);
            return setSearchTerm(e.target.value);
          }}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user._id}`} className="hidden md:block">
          <img src={user.user.image} alt="logo" className="w-14 h-11 rounded" />
        </Link>
        <Link
          to="create-pin"
          className="bg-black rounded-lg text-white w-12 h-12 md:w-12 md:h-11 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
