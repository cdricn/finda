'use client';

import useSWR from 'swr';
import { FetchPosts } from '../api/fetch/dataFetcher';
import { FetchResult } from '../lib/interface';

export function useFetchWithSWR<T>(params:string): FetchResult<T> {

  const { data, isLoading, error } = useSWR(
    `/api/posts/${params}`, FetchPosts, {
      revalidateOnFocus: false,
      errorRetryCount: 5,
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 404) return;
        if (retryCount >= 5) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      }
  });

  return {data, isLoading, error};
}