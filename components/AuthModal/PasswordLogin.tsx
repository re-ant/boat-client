"use client";

import useAuthInfo from "components/AuthModal/hooks/useAuthInfo";
import useAuthModalAction from "components/AuthModal/hooks/useAuthModalAction";
import useInput from "hooks/useInput";
import { isEmptyString } from "libs/utils";
import { signIn } from "next-auth/react";
import EventType from "types/Event";

import styles from "./PasswordLogin.module.scss";

export default function PasswordLogin() {
  const { updateHistory } = useAuthModalAction();
  const { email } = useAuthInfo();
  const {
    input: password,
    changeHandler,
    errorMessage,
    handleInputError,
  } = useInput({
    initialValue: "",
    errorHandler: (error) => {
      switch (error) {
        case "EmptyPasswordError":
          return "비밀번호를 입력해주세요";
        case "PasswordNotMatchError":
          return "비밀번호가 일치하지 않아요";
        case "InternalServerError":
          return "잠시 후 다시 시도해주세요";
        default:
          return "";
      }
    },
  });

  /* 이메일-비밀번호 로그인 시도 처리 */
  const formSubmitHandler: EventType<"form", "onSubmit"> = async (e) => {
    e.preventDefault();

    if (isEmptyString(password)) {
      return handleInputError("EmptyPasswordError");
    }

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!response || response.status === 401) {
        return handleInputError("PasswordNotMatchError");
      }
    } catch (e) {
      return handleInputError("InternalServerError");
    }
  };

  const navigatePageHanlder = () => {
    updateHistory({ type: "push", page: "find-account" });
  };

  return (
    <form className={styles["password-login"]} onSubmit={formSubmitHandler}>
      <div className={styles["title"]}>비밀번호를 입력해주세요</div>
      <div className={styles["input"]}>
        <input
          value={password}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
          onChange={changeHandler}
        />
        <p className={styles["error-message"]}>{errorMessage}</p>
      </div>
      <button type="submit">확인</button>
      <div className={styles["login-btn"]}>
        <p onClick={navigatePageHanlder}>비밀번호 찾기</p>
      </div>
    </form>
  );
}
