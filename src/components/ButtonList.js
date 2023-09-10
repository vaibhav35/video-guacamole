import React from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const ButtonList = ({ buttonListNames, setVideos }) => {
  const searchVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API);
    const json = await data.json();
    console.log(json, "serach data");
    setVideos(json.items);
    // console.log(json.kind === "youtube#searchListRespons")
  };
  return (
    <div className="py-3">
      {buttonListNames?.map((name) => (
        <button
          className="border-2 mx-3 px-2 border-gray-700 rounded-full"
          onClick={searchVideos}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
