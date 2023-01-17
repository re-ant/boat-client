import "styles/globals.scss";

import AuthContext from "app/AuthContext";
import { getServerSession } from "libs/auth";

import localFont from "@next/font/local";

// Next13 폰트 최적화
const font = localFont({
  src: [
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/SpoqaHanSansNeo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head />
      <AuthContext session={session}>
        <body className={font.className}>{children}</body>
      </AuthContext>
    </html>
  );
}
