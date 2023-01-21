"use client";

import SocialButton from "components/common/SocialButton/SocialButton";
import Image from "next/image";
import React from "react";
import EventType from "types/event";

export default function KakaoLoginButton() {
  const backgroundColor = "#FEE500";
  const textColor = "rgba(0, 0, 0, 0.85)";
  const kakaoIcon = (
    <Image
      src={"auth/kakao-symbol.svg"}
      alt={"symbol"}
      width={20}
      height={20}
      priority
    />
  );
  const onClick: EventType<"div", "onClick"> = (e) => {
    console.log("카카오 로그인");
  };

  return (
    <SocialButton
      textContent={"카카오 계정으로 시작하기"}
      icon={kakaoIcon}
      onClick={onClick}
      divider={true}
      textColor={textColor}
      backgroundColor={backgroundColor}
      outlineColor={backgroundColor}
    />
  );
}
