import axios, { AxiosError } from "axios";
import { API_SERVER_URL } from "configs/env.client";

// 인증이 필요하지 않은 API 요청을 위한 axios 인스턴스
export const apiRequest = axios.create({
  baseURL: API_SERVER_URL,
  timeout: 2500 /* 2.5ms */,
});

// axios 요청으로 인한 에러인지 체크하는 함수
export const isAxiosError = (e: any): e is AxiosError => axios.isAxiosError(e);
