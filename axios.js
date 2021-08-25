import axios from "axios";

const instance = axios.create({
  baseURL: 'https://quiet-crag-16791.herokuapp.com/',
});

export default instance;
