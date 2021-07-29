import axios, { AxiosRequestConfig } from "axios";

// let reqNum = 0;
// function closeLoading () {
//   if (reqNum <= 0) return
//   reqNum--
//   if (reqNum === 0) {
//     Toast.hide()
//   }
// }

const axiosInstance = axios.create({
  timeout: 20000,
});

axiosInstance.interceptors.request.use((request) => {
  // if (reqNum === 0) {
  //   Toast.loading('loading...')
  // }
  // reqNum++
  // 处理 cms 跨域
  if (typeof request.withCredentials === "undefined") {
    request.withCredentials = true;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status !== 200) {
      // closeLoading();
      throw new Error("接口调用失败");
    }
    const { code } = data;
    if (typeof code !== "undefined" && +code === 1024) {
      // closeLoading();
      return;
    }
    // closeLoading();
    return data;
  },
  (error) => {
    // closeLoading();
    return Promise.reject(error);
  }
);

export const request = <T = any, R = T>(config: AxiosRequestConfig) => {
  return axiosInstance.request<T, R>({
    ...config,
  });
};
