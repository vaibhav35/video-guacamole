import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";
import CommentsContainer from "./CommentsContainer";

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
    <div className="col-span-12 lg:col-span-8">
      <div className="flex justify-center w-full ">
        <iframe
          className="iframe-height-width-ratio"
          title="YouTube video player"
          id="player"
          type="text/html"
          src={videoSrc}
          frameBorder="0"
        ></iframe>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
