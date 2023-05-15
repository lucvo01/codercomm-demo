import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", { error });
    return Promise.reject(error);
  }
);

apiService.interceptors.request.use(
  (response) => {
    console.log("Response", response);
    return response.data;
  },
  function (error) {
    console.log("REQUEST ERROR", { error });
    // const message = error.response?.data?.error?.message || "Unknown Error"
    return Promise.reject(error);
  }
);
