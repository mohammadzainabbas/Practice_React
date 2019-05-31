import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/browser";

//This intercepts success or error response from the server.
//Arguments are the function to be called when good or bad response arrives.
//1st Argument -> Function to be called when successful response arrives.
//2nd Argument -> Function to be called when error/bad response arrives.
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  //Handling unexpected errors globally.
  if (!expectedError) {
    // console.log("Logging the error", error);
    Sentry.captureException(error);
    toast.error("Something failed. Try again in a short while.!");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete
};
