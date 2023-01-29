"use client";

import AuthModal from "components/AuthModal/AuthModal";
import { signOut, useSession } from "next-auth/react";
import { useModalAction } from "store/useModalStore";
import EventType from "types/Event";

import style from "./Profile.module.scss";

export default function Profile() {
  const { data, status } = useSession();
  const { openModal } = useModalAction();

  const signInHandler: EventType<"button", "onClick"> = async (e) => {
    openModal(AuthModal, {});
  };
  const signOutHandler: EventType<"button", "onClick"> = (e) => {
    signOut({ redirect: false });
  };

  if (status === "unauthenticated") {
    return <button onClick={signInHandler}>로그인</button>;
  }
  if (status === "authenticated") {
    return <button onClick={signOutHandler}>로그아웃</button>;
  }

  return <div>로딩중..</div>;
}
