import { getEnv } from "libs/env";

// Next Auth
export const NEXTAUTH_SECRET = getEnv("NEXTAUTH_SECRET");
export const NEXTAUTH_URL = getEnv("NEXTAUTH_URL");

// API
export const API_SERVER_URL = getEnv("API_SERVER_URL");
