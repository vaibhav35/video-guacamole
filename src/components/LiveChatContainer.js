import React, { useEffect, useRef, useState } from "react";
import { YOUTUBE_LIVECHAT_API } from "../utils/constants";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChatContainer = () => {
  // const [fetchedLiveMessages, setFetchedLiveMessages] = useState([]);
  // const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.liveChat.messages);
  const itemsRef = useRef(null);

  // useEffect(() => {
    
  //     const interval = setTimeout(() => {
  //       fetchlivemessages(activeLiveChatId)
  //         .then((json) => {
  //           setFetchedLiveMessages(json);
  //         })
  //         .catch((e) => {
  //           console.errror(e) ;
  //         });
  //     }, 75000);
  //     return () => {
  //       console.log("clearing timeout");
  //       clearTimeout(interval);
  //     };
    
  // }, [fetchedLiveMessages]);

  // useEffect(() => {
  //   if (fetchedLiveMessages?.items !== undefined) {
  //     dispatch(addMessage(fetchedLiveMessages?.items));
  //   }
  // }, [fetchedLiveMessages]);

  useEffect(() => {
    scrollToLastComment();
  }, [chatMessages]);

  // const fetchlivemessages = async () => {
  //   const response = fetchedLiveMessages?.nextPageToken
  //     ? await fetch(
  //         YOUTUBE_LIVECHAT_API +
  //           "&pageToken=" +
  //           fetchedLiveMessages?.nextPageToken +
  //           "&liveChatId=" +
  //           activeLiveChatId
  //       )
  //     : await fetch(YOUTUBE_LIVECHAT_API + "&liveChatId=" + activeLiveChatId);

  //   const json = await response.json();
  //   // setFetchedLiveMessages(json);
  //   console.log(json, "fetched message json");
  //   console.log(json?.pollingIntervalMillis, "fetched message polling time");
  //   return json;
  // };

  console.log(chatMessages, "mesaages");
  // console.log(activeLiveChatId);

  function scrollToLastComment() {
    console.log("scroll function executing");

    itemsRef.current.lastChild?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <div
      className="col-span-12 lg:col-span-4 m-3  c p-2 rounded-lg border border-black flex-col-reverse overflow-scroll h-screen-75"
      ref={itemsRef}
    >
      {chatMessages.map((message) => (
        <ChatMessage
          key={message?.id}
          profileImage={message?.authorDetails?.profileImageUrl}
          authorName={message?.authorDetails?.displayName}
          displayMessage={message?.snippet?.displayMessage}
        />
      ))}
    </div>
  );
};

export default LiveChatContainer;
