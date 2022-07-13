import axios from "axios";
import { constants } from "buffer";

const apiClient = axios.create({
  // TODO: read this URL from an environment variable
  baseURL: "https://api.cutkon.com/api/v1"
});

apiClient.interceptors.request.use((config) => {
    Object.assign(config.headers, { 
      'Content-Type': 'application/json',
      'Accept' : 'application/json',
    });

    if (config.data instanceof FormData) {
        Object.assign(config.headers, { 'Content-Type': 'multipart/form-data' });
    }

    const token = localStorage.getItem('token');
    if (token) {
      Object.assign(config.headers, { 
        'Authorization' : `Token ${localStorage.getItem('token')}`
      });
    }

    return config;
});

export default apiClient;