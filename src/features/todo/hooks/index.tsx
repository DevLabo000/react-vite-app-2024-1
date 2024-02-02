import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { AxiosError } from 'axios';
import { fetcher, todoPost, deleter, todoUpdate } from '@/lib/api/client';
import { TodoType } from '../types';

export const useTodoFetcher = <T, V>() => {
  const { data, error, isLoading } = useSWR<TodoType[], AxiosError<T, V>>(
    '/todos',
    fetcher,
  );
  return { data, error, isLoading };
};

export const useTodoPost = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/todos',
    (key, { arg }: { arg: TodoType }) => todoPost(key, arg),
  );
  return { trigger, isMutating };
};

export const useTodoDelete = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/todos',
    (key, { arg }: { arg: number }) => deleter(key, arg),
  );

  return { trigger, isMutating };
};

export const useTodoPut = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/todos',
    (key, { arg }: { arg: TodoType }) => todoUpdate(key, arg),
  );

  return { trigger, isMutating };
};
