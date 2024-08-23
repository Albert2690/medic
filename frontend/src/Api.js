import axios from "axios";
const API_URL = 'https://www.mirsa.online/'
//   process.env.NODE_ENV === "production" ?

  
     

const apiInstance = axios.create({
  baseURL: API_URL,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    console.log(response, "response from axios");

    return response;
  },
  (error) => {
    console.log(error, "errrrrrrrrrrrrrrrrr");
    return Promise.reject(error);
  }
);

export default apiInstance;
