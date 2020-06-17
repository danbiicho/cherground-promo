import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

export const BASE_URL =
  "https://e60pwpq9m7.execute-api.ap-northeast-2.amazonaws.com/dev";
export const URL_USER = "sign-in";
export const URL_SIGNUP = "sign-up";
export const URL_ORDER = "request";

import { RouteComponentProps } from "react-router";

const ApiManager = () => {};

const normalClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const request = (
  config: AxiosRequestConfig,
  auth?: boolean,
  router?: RouteComponentProps
) => {
  const client = normalClient;

  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response || error.message);
  };

  return client(config).then(onSuccess).catch(onError);
};

export default ApiManager;
