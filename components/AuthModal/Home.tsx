"use client";

import CredentialsLogin from "components/AuthModal/CredentialsLogin";
import SocialLogin from "components/AuthModal/SocialLogin";

export default function Home() {
  return (
    <>
      <CredentialsLogin />
      <SocialLogin />
    </>
  );
}
