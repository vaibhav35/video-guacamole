import React from "react";

const ChatMessage = ({profileImage,authorName,displayMessage}) => {
 
  return (
    <div className="flex my-4 border-b-2 items-start">
      <img
        src={profileImage}
        alt={authorName + "photo"}
        className="rounded-full flex-shrink-0 h-7 w-7 mr-1"
      />
      <div className="">
        <span className="font-bold text-xs mr-2 flex-shrink-0">
          {authorName}
        </span>
        <p className=" text-base  inline" >{displayMessage}</p>
        </div>
    </div>
  );
};

export default ChatMessage;
