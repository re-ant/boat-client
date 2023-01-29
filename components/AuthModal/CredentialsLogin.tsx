"use client";

import useInput from "hooks/useInput";
import { apiRequest, isAxiosError } from "libs/ajax";
import EventType from "types/Event";

import styles from "./CredentialsLogin.module.scss";

export default function CredentialsLogin() {
  const { input: email, changeHandler: idChangeHandler } = useInput();

  const formSubmitHandler: EventType<"form", "onSubmit"> = async (e) => {
    e.preventDefault();

    try {
      const body = { email };
      const isProperEmail: boolean = await apiRequest.post(
        "/v1/auth/verify-email",
        body,
      );
      return isProperEmail; // 로그인 로직
    } catch (e) {
      if (isAxiosError(e) && e.code === "401") {
        alert("존재하지 않는 이메일입니다.");
        return false; // 회원가입 로직
      }
      alert(e);
      return false;
    }
  };

  return (
    <form className={styles["credentials-login"]} onSubmit={formSubmitHandler}>
      <div className={styles["title"]}>이메일을 입력해주세요</div>
      <div className={styles["subtitle"]}>이메일만 있어도 가입할 수 있어요</div>
      <input
        value={email}
        type={"text"}
        placeholder={"이메일을 입력해주세요"}
        onChange={idChangeHandler}
      />
      <button type="submit">다음</button>
    </form>
  );
}
