import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetcher = async <T, V>(key: string, params?: V): Promise<T> => {
  const response = await axiosClient.get<T>(key, {
    params: params,
  });
  return response.data;
};

export const todoPost = async <T, V>(key: string, params?: V): Promise<T> => {
  const response = await axiosClient.post<T>(key, {
    ...params,
  });
  return response.data;
};
