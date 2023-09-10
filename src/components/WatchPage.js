import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/menuSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChatContainer from "./LiveChatContainer";
import {
  YOUTUBE_LIVECHAT_API,
  YOUTUBE_VIDEO_LIVE_API,
} from "../utils/constants";
import { addMessage, clearMessages } from "../utils/chatSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetails, setVideoDetails] = useState();
  const [LiveChatMessages, setLiveChatMessages] = useState([]);
  const [activeLiveChatId, setActiveLiveChatId] = useState();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    fetchVideoDetails(videoId);
  }, []);

  useEffect(() => {
    if (activeLiveChatId) {
      const interval = setTimeout(() => {
        fetchlivemessages(activeLiveChatId)
          .then((json) => {
            setLiveChatMessages(json);
          })
          .catch((e) => {
            console.errror(e);
          });
      }, 10000);
      return () => {
        console.log("clearing timeout");
        clearTimeout(interval);
      };
    }
  }, [LiveChatMessages, activeLiveChatId]);

  useEffect(() => {
    if (LiveChatMessages?.items) {
      dispatch(addMessage(LiveChatMessages?.items));
    }

    
  }, [LiveChatMessages]);

  useEffect(() => {
    return () => {
      console.log("clearing live message store")
      dispatch(clearMessages());
    };
  },[])

  const fetchVideoDetails = async (videoId) => {
    const data = await fetch(YOUTUBE_VIDEO_LIVE_API + "&id=" + videoId);
    const json = await data.json();
    // console.log(json, "livechat data");
    setVideoDetails(json);
    setActiveLiveChatId(json?.items[0]?.liveStreamingDetails?.activeLiveChatId);
  };
  console.log("video details", videoDetails);

  const fetchlivemessages = async () => {
    const response = LiveChatMessages?.nextPageToken
      ? await fetch(
          YOUTUBE_LIVECHAT_API +
            "&pageToken=" +
            LiveChatMessages?.nextPageToken +
            "&liveChatId=" +
            activeLiveChatId
        )
      : await fetch(YOUTUBE_LIVECHAT_API + "&liveChatId=" + activeLiveChatId);

    const json = await response.json();
    // setFetchedLiveMessages(json);
    console.log(json, "fetched message json");
    console.log(json?.pollingIntervalMillis, "fetched message polling time");
    return json;
  };

  const videoSrc =
    "http://www.youtube.com/embed/" + videoId + "?enablejsapi=1&";
  return (
    <>
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

      <LiveChatContainer />
    </>
  );
};

export default WatchPage;
