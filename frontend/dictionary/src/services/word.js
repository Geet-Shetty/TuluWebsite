import axios from "axios";
const baseUrlID = "http://localhost:3001/searchID?term=";
const baseUrlENG = "http://localhost:3001/searchENG?term=";
const baseUrlTU = "http://localhost:3001/searchTU?term=";

const getWord_byID = (id) => {
  const request = axios.get(`${baseUrlID}${id}`);
  return request.then((response) => response.data);
};

const getWord_ENG = (term) => {
  const request = axios.get(`${baseUrlENG}${term}`);
  return request.then((response) => response.data);
};

const getWord_TU = (term) => {
  const request = axios.get(`${baseUrlTU}${term}`);
  return request.then((response) => response.data);
};

export default {
  getWord_byID,
  getWord_ENG,
  getWord_TU,
};
