import axios from "axios";

const client = axios.create({
  baseURL: "https://localhost:7109/api/TodoLy",
  headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" },
});

export default client;
