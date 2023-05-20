import React from "react";
import VideoCard from "./VideoCard";

const AdVideoCard = ({ info }) => {
  return (
    <div className=" m-1 border-4 border-red-900 col-span-12 md:col-span-6 xl:col-span-4 justify-self-center">
      <VideoCard info={info} />
    </div>
  );
};

export default AdVideoCard;
