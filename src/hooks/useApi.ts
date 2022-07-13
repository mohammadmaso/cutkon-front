import { useEffect, useState } from "react";
import { AxiosInstance } from 'axios';

const useApi = (apiFunc : any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args : any) => {
    setLoading(true);
    try {
      const result = await apiFunc.apply(null, ...args);
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  

  return {
    data,
    error,
    loading,
    request
  };
};

export default useApi

export const useUpload =  (apiFunc : any) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0)


    const request = async (...args : any) => {
    setLoading(true);
    try {
      const result = await apiFunc.apply(null,...args); //? apiFunc(...args)
      
      setData(result.data);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    progress,
    request
  };

}