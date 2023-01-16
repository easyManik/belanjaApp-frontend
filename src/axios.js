import axios from "axios";
const axiosApiInstace = axios.create({
  baseURL: process.env.REACT_APP_API_BACKEND,
});
axiosApiInstace.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosApiInstace.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default axiosApiInstace;
