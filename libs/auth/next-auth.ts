import { NEXTAUTH_SECRET } from "configs/env.server";
import credentialsProvider from "libs/auth/credentialsProvider";
import googleProvider from "libs/auth/googleProvider";
import kakaoProvider from "libs/auth/kakaoProvider";
import naverProvider from "libs/auth/naverProvider";
import { NextAuthOptions } from "next-auth";
// eslint-disable-next-line camelcase
import { unstable_getServerSession } from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [
    credentialsProvider,
    googleProvider,
    kakaoProvider,
    naverProvider,
  ],
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async signIn(props) {
      console.log(props);
      return true;
    },
  },
};

export const getServerSession = async () => {
  const session = await unstable_getServerSession(authOptions);
  return session;
};
