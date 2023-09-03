import axios from "axios";

const url = "https://promising-news.uc.r.appspot.com/news";

export const getAllNews = async () => await axios.get(url);
export const getNewsWithParams = async (params) =>
  await axios.get(url, { params });
