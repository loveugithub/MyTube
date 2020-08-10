import axios from "axios";

const KEY = "AIzaSyA_n9Tu9kI52QpzxMKypjcZPqvckKK85Ak";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
