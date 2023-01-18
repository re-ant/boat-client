import { NEXTAUTH_SECRET } from "configs/env.server";
import credentialsProvider from "libs/auth/credentialsProvider";
import { NextAuthOptions } from "next-auth";
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  secret: NEXTAUTH_SECRET,
};

export const getServerSession = async () => {
  const session = await unstable_getServerSession(authOptions);
  return session;
};
