import { getEnv } from "libs/env";

export const API_SERVER_URL =
  process.env.NEXT_PUBLIC_API_SERVER_URL ||
  getEnv("NEXT_PUBLIC_API_SERVER_URL");
