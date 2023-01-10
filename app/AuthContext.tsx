"use client";

import type React from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface Props extends React.PropsWithChildren {
  session: Session | null | undefined;
}

/**
 * Next.js 13의 app directory 방식에서 SessionProvider 를 사용하기 위한 컨텍스트
 * 현재 서버 컴포넌트에서 사용할 수 없기 때문에 클라이언트 컴포넌트로 분리하여 서버 컴포넌트에서 사용
 * 감싸진 자식 컴포넌트 중 클라이언트 컴포넌트에서 useSession 훅을 사용할 수 있다.
 * @see https://github.com/nextauthjs/next-auth/issues/5647
 */
export default function AuthContext({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
