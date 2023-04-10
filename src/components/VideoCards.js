import React from "react";

const VideoCards = ({ info }) => {
  const { snippet } = info;
  const { title, thumbnails } = snippet;
  return (
    <div className="">
      <img src={thumbnails.medium.url} alt={title} className="rounded-lg"/>
      <h2>{title}</h2>
    </div>
  );
};

export default VideoCards;
