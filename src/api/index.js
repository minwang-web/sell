import axios from "axios";

const instance = axios.create({
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 5000,
});

// 添加请求拦截
instance.interceptors.request.use((config) => {
  // 在发送请求之前
  return config;
});

instance.interceptors.request.eject((error) => {
  // 对请求错误做些什么
  return error;
});

// 添加响应拦截
instance.interceptors.response.use((response) => {
  // 对响应数据做点什么,请求成功后
  return response;
});

instance.interceptors.response.eject((error) => {
  // 对响应错误做点什么
  return error;
});

const api = {
  getSeller: () => {
    return instance.get("/api/seller");
  },
};

export default api;
