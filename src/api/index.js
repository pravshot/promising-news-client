import axios from 'axios';

const url = 'https://promising-news-api.herokuapp.com/news';

export const getAllNews = () => axios.get(url);
export const getNewsWithParams = (params) => axios.get(url, { params });