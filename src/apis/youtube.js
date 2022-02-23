import axios from "axios";

const KEY = "AIzaSyDGfF8Da5yJfgPmRsoW4Mb0oo3BZYw8Z_k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY
  },
});
