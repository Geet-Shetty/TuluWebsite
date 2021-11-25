import axios from "axios";
const baseUrl = "http://localhost:3001/searchID?term=";

const getWord = (id) => {
  const request = axios.get(`${baseUrl}${id}`);
  return request.then((response) => response.data);
};

export default {
  getWord,
};
