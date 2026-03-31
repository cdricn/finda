'use client';

import useSWR from 'swr';
import { FetchResult } from '../lib/interface';
import { ParamValue } from "next/dist/server/request/params";

export function useFetchWithSWR<T>(
  params: string | number,
  link: string,
  fetcherFunction: (url: ParamValue)=>Promise<any>
) : FetchResult<T> {

  const { data, isLoading, error } = useSWR(
    `${link}/${params}`, fetcherFunction, {
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