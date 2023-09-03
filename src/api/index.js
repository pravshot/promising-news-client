import axios from "axios";

const url = "http://localhost:4000/news";

export const getAllNews = async () => await axios.get(url);
export const getNewsWithParams = async (params) =>
  await axios.get(url, { params });
