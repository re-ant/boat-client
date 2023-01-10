import "styles/globals.scss";

import AuthContext from "app/AuthContext";
import { getServerSession } from "lib/next-auth";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AuthContext session={session}>
        <body>{children}</body>
      </AuthContext>
    </html>
  );
}
