import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTTHREADS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const CommentsContainer = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchCommentsUnderVideo();
  }, []);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  console.log(videoId);
  console.log("comments are", comments);
  const fetchCommentsUnderVideo = async () => {
    try {
      const response = await fetch(
        YOUTUBE_COMMENTTHREADS_API + "&videoId=" + videoId
      );
     
      if (!response.ok) {
        throw response;
      }
      const json = await response.json();
      
      setComments(json);
    } catch (e) {
      console.error(e, "error");
      // throw new Error("new jkh error");
    }
  };

  return (
    <div>
      <div className="font-bold m-3 my-5">Comments</div>
      {comments?.items?.length !== 0 ? (
        <div className="">
          {comments?.items?.map((comment) => {
            const commentSnippet = comment.snippet;

            const {
              textDisplay,
              likeCount,
              textOriginal,
              authorProfileImageUrl,
              authorDisplayName,
              authorChannelUrl,
            } = commentSnippet?.topLevelComment.snippet;
            return (
              <div className="block">
                <div className="flex px-2 py-3 border-b-2  ">
                  <div className=" flex-shrink-0 w-11">
                    <img
                      className="rounded-full w-full"
                      src={authorProfileImageUrl}
                      alt=" "
                    />
                  </div>
                  <div className="pl-2">{textOriginal}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No Comments</p>
      )}
    </div>
  );
};

export default CommentsContainer;
