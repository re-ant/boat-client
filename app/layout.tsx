import "styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import AuthContext from "app/AuthContext";
import Modals from "components/Modal/Modals";
import Navbar from "components/Navbar/Navbar";
import { getServerSession } from "libs/auth";

import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "@next/font/local";

// FontAwesome
config.autoAddCss = false;

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
  variable: "--spoqa-han-sans",
  display: "swap",
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
        <body className={font.className}>
          <div id="modal" />
          <Modals />
          <Navbar />
          {children}
        </body>
      </AuthContext>
    </html>
  );
}
