"use client";

import CredentialsLogin from "components/AuthModal/CredentialsLogin";
import SocialLogin from "components/AuthModal/SocialLogin";

import styles from "./Login.module.scss";

export default function Login() {
  return (
    <>
      <CredentialsLogin />
      <SocialLogin />
    </>
  );
}
