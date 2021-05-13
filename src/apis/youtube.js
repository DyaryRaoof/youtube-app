import axios from "axios";

const KEY = "AIzaSyCSshtpDe_seesLLAoLU4LxahSjS5ettPU";
const baseURL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: baseURL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
