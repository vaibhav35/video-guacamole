import React, { useEffect, useState } from "react";
import VideoCards from "./VideoCards";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="grid grid-cols-12">
      {videos.map((video) => (
        <div className="col-span-12 md:col-span-6 xl:col-span-4 justify-self-center p-4" key={video.id}>
        <Link to={"watch?v=" + video.id}>
          <VideoCards key={video.id} info={video} />
        </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
