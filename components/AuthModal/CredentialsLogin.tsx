"use client";

import useInput from "hooks/useInput";
import EventType from "types/event";

import styles from "./CredentialsLogin.module.scss";

export default function CredentialsLogin() {
  const { input: id, changeHandler: idChangeHandler } = useInput();
  const { input: password, changeHandler: passwordChangeHandler } = useInput();

  const formSubmitHandler: EventType<"form", "onSubmit"> = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>id</label>
      <input value={id} onChange={idChangeHandler} />
      <label>pw</label>
      <input value={password} onChange={passwordChangeHandler} />
      <button type="submit">로그인</button>
    </form>
  );
}
