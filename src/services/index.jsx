import axios from "axios";

const api = axios.create({
  baseURL: "https://galeranerd-api.herokuapp.com/",
});

export default api;
