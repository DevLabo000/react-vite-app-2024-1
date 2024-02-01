import useSWR from 'swr';
import { AxiosError } from 'axios';
import { fetcher } from '@/lib/api/client';
import { TodoType } from '../types';

export const useTodoFetcher = <T, V>() => {
  const { data, error, isLoading } = useSWR<TodoType[], AxiosError<T, V>>(
    '/todos',
    fetcher,
  );
  return { data, error, isLoading };
};
