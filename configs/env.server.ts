import { getEnv } from "libs/env";

// Next Auth
export const NEXTAUTH_SECRET = getEnv("NEXTAUTH_SECRET");
export const NEXTAUTH_URL = getEnv("NEXTAUTH_URL");

// Google
export const GOOGLE_CLIENT_ID = getEnv("GOOGLE_CLIENT_ID");
export const GOOGLE_CLIENT_SECRET = getEnv("GOOGLE_CLIENT_SECRET");

// Naver
export const NAVER_CLIENT_ID = getEnv("NAVER_CLIENT_ID");
export const NAVER_CLIENT_SECRET = getEnv("NAVER_CLIENT_SECRET");

// Kakao
export const KAKAO_CLIENT_ID = getEnv("KAKAO_CLIENT_ID");
export const KAKAO_CLIENT_SECRET = getEnv("KAKAO_CLIENT_SECRET");
