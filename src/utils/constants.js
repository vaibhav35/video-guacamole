const GOOGLE_API_KEY = "AIzaSyCRzjdjUpAyTn-A0NyOSzuy30MYnfVibNY";
const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

const YOUTUBE_SEARCH_SUGGEST_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

const YOUTUBE_COMMENTTHREADS_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&key=" +GOOGLE_API_KEY

 const YOUTUBE_SEARCH_API= "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=24&regionCode=IN&type=video&key=" + GOOGLE_API_KEY

 const YOUTUBE_VIDEO_LIVE_API= "https://youtube.googleapis.com/youtube/v3/videos?part=id%2CliveStreamingDetails%2CcontentDetails%2CtopicDetails%2Csnippet%2Cstatistics&key=" + GOOGLE_API_KEY

 const YOUTUBE_LIVECHAT_API= "https://youtube.googleapis.com/youtube/v3/liveChat/messages?part=id%2C%20snippet%2C%20authorDetails&profileImageSize=28&key=" + GOOGLE_API_KEY


export { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_SUGGEST_API, YOUTUBE_COMMENTTHREADS_API,YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_LIVE_API,YOUTUBE_LIVECHAT_API};
