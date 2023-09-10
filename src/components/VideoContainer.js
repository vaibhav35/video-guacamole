import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = ({ videos, setVideos }) => {
  // const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("all videos", json);
    setVideos(json.items);
  };
  return (
    <div className="grid grid-cols-12">
      {videos.map((video) => (

        <div
          className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 m-4 border-2 border-gray-500 p-2 pt-3 rounded-lg shadow-md"
          key={typeof video.id === "object" ? video.id.videoId : video.id }
        >
          <Link to={"watch?v=" + (typeof video.id === "object" ? video.id.videoId : video.id)}>
            <VideoCard key={typeof video.id === "object" ? video.id.videoId : video.id} info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
