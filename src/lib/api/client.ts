import axios from 'axios';
import { TodoType } from '@/features/todo/types';

/**
 * Axiosクライアント定義
 * @summary APIのURLなどを定義
 */
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
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

export const deleter = async <T>(key: string, id: number): Promise<T> => {
  const response = await axiosClient.delete<T>(`${key}/${id}`);
  return response.data;
};

export const todoUpdate = async <T>(
  key: string,
  params: TodoType,
): Promise<T> => {
  const response = await axiosClient.put<T>(`${key}/${params.id}`, {
    ...params,
  });
  return response.data;
};
