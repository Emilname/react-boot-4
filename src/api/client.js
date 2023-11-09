import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

client.interceptors.response.use(function (response) {
  const { headers, data } = response;
  if (headers["content-type"] === "application/json; charset=utf-8") {
    return data;
  }
  return response;
});

export default client;
