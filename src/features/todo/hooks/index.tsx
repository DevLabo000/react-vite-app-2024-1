import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { AxiosError } from 'axios';
import { fetcher, todoPost, deleter, todoUpdate } from '@/lib/api/client';
import { TodoType } from '../types';

/**
 * TODO取得カスタムフック
 * @summary SWRを利用しTODO一覧を取得する。
 * @returns
 */
export const useTodoFetcher = <T, V>() => {
  const { data, error, isLoading } = useSWR<TodoType[], AxiosError<T, V>>(
    '/todos',
    fetcher,
  );
  return { data, error, isLoading };
};

/**
 * TODO登録カスタムフック
 * @summary SWRを利用しTODOを登録する。
 * @returns
 */
export const useTodoPost = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/todos',
    (key, { arg }: { arg: TodoType }) => todoPost(key, arg),
  );
  return { trigger, isMutating };
};

/**
 * TODO削除カスタムフック
 * @summary idをキーにTODOを削除する。
 * @returns
 */
export const useTodoDelete = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/todos',
    (key, { arg }: { arg: number }) => deleter(key, arg),
  );

  return { trigger, isMutating };
};

/**
 * TODO更新カスタムフック
 * @summary idをキーにTODOを更新する。
 * @returns
 */
export const useTodoPut = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/todos',
    (key, { arg }: { arg: TodoType }) => todoUpdate(key, arg),
  );

  return { trigger, isMutating };
};
