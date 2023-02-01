"use client";

import SocialButton from "components/common/SocialButton/SocialButton";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import EventType from "types/Event";

export default function NaverLoginButton() {
  const backgroundColor = "#03C75A";
  const textColor = "#FFFFFF";
  const naverIcon = (
    <Image
      src={"auth/naver-symbol.svg"}
      alt={"symbol"}
      width={20}
      height={20}
      priority
    />
  );
  const onClick: EventType<"div", "onClick"> = async () => {
    await signIn("naver", { redirect: false });
  };

  return (
    <SocialButton
      textContent={"네이버 계정으로 시작하기"}
      icon={naverIcon}
      onClick={onClick}
      divider={true}
      textColor={textColor}
      backgroundColor={backgroundColor}
      outlineColor={backgroundColor}
    />
  );
}
