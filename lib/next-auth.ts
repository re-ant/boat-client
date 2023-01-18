import type { NextAuthOptions } from "next-auth";
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [],
};

export const getServerSession = async () => {
  const session = await unstable_getServerSession(authOptions);
  return session;
};
