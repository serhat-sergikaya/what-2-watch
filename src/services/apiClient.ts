import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1d45010f1c041ea6fdddbb624528e616",
  },
});
