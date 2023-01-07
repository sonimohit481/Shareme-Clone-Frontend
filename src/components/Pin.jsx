import React from "react";
import { urlFor } from "../client";

const Pin = ({ pin }) => {
  //   const { image, _id, destination } = pin.postedBy;
  //   let Image = pin.image.asset.url;
  //   console.log(pin.image.asset.url);
  return (
    <div>
      <img
        className=" rounded-lg w-full"
        alt="user image "
        src={urlFor(pin.image.asset.url).width(400).url()}
      />
    </div>
  );
};

export default Pin;
