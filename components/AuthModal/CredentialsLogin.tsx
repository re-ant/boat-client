"use client";

import useInput from "hooks/useInput";
import EventType from "types/event";

import styles from "./CredentialsLogin.module.scss";

export default function CredentialsLogin() {
  const { input: email, changeHandler: idChangeHandler } = useInput();

  const formSubmitHandler: EventType<"form", "onSubmit"> = (e) => {
    e.preventDefault();
    console.log(email);
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
