import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const videoSrc =
    "http://www.youtube.com/embed/" + videoId + "?enablejsapi=1&";
  return (
    <div>
      <iframe
        title="YouTube video player"
        id="player"
        type="text/html"
        width="560"
        height="315"
        src={videoSrc}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default WatchPage;
