"use client";

import GoogleLoginButton from "components/common/SocialButton/GoogleLoginButton";
import KakaoLoginButton from "components/common/SocialButton/KakaoLoginButton";
import NaverLoginButton from "components/common/SocialButton/NaverLoginButton";

import styles from "./SocialLogin.module.scss";

export default function SocialLogin() {
  return (
    <div className={styles["social-login"]}>
      <div className={styles["title"]}>소셜 계정이 있으신가요?</div>
      <div className={styles["subtitle"]}>
        자주 사용하는 플랫폼으로 시작해보세요
      </div>
      <GoogleLoginButton />
      <NaverLoginButton />
      <KakaoLoginButton />
    </div>
  );
}
