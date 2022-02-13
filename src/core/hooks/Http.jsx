import Axios from 'axios';
import LRU from 'lru-cache';
import useAxios, { configure } from 'axios-hooks';
import { EndpointBaseUrl } from '../config';

const axios = Axios.create({ baseURL: EndpointBaseUrl });
const cache = new LRU();

configure({ axios, cache });

export function useRequest(url, headers, method, useCache = false){
  return useAxios({
    url,
    headers,
    method
  }, { useCache });
}

export function useGetRequest(url, headers = {}, useCache = false){
  return useRequest(url, headers, 'GET', useCache);
}

export function usePostRequest(url, headers = {}){
  return useRequest(url, headers, 'POST', false);
}

export function usePutRequest(url, headers = {}){
  return useRequest(url, headers, 'PUT', false);
}

export function useDeleteRequest(url, headers = {}){
  return useRequest(url, headers, 'DELETE', false);
}
