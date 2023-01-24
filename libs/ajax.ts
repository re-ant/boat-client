import axios, { AxiosError } from "axios";
import { API_SERVER_URL } from "configs/env.client";

export const apiRequest = axios.create({
  baseURL: API_SERVER_URL,
});

export const isAxiosError = (e: any): e is AxiosError => axios.isAxiosError(e);
