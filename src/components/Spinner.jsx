import React from "react";
import Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className=" flex flex-col h-full w-full justify-center items-center">
      <Loader type="circle" />
    </div>
  );
};

export default Spinner;
