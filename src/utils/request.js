import axios from "axios";

export const Get = (url, params = {}) => {
  return axios.get(url, {
    params: params,
  });
};

export const Post = (url, data = {}) => {
  return axios.post(url, data);
};
