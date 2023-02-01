"use client";

import SocialButton from "components/common/SocialButton/SocialButton";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import EventType from "types/Event";

export default function GoogleLoginButton() {
  const backgroundColor = "#FFFFFF";
  const textColor = "#000000";
  const kakaoIcon = (
    <Image
      src={"auth/google-symbol.svg"}
      alt={"symbol"}
      width={20}
      height={20}
      priority
    />
  );
  const onClick: EventType<"div", "onClick"> = async () => {
    await signIn("google", { redirect: false });
  };

  return (
    <SocialButton
      textContent={"Google 계정으로 시작하기"}
      icon={kakaoIcon}
      onClick={onClick}
      divider={true}
      textColor={textColor}
      backgroundColor={backgroundColor}
      outlineColor={textColor}
    />
  );
}
