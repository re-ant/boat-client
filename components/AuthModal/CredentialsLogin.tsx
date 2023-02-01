"use client";

import useAuthInfo from "components/AuthModal/hooks/useAuthInfo";
import useAuthModalAction from "components/AuthModal/hooks/useAuthModalAction";
import useInput from "hooks/useInput";
import { apiRequest, isAxiosError } from "libs/ajax";
import { isEmail, isEmptyString } from "libs/utils";
import EventType from "types/Event";

import styles from "./CredentialsLogin.module.scss";

export default function CredentialsLogin() {
  const { updateHistory } = useAuthModalAction();
  const { setEmail } = useAuthInfo();
  const {
    input: email,
    errorMessage,
    changeHandler,
    handleInputError,
  } = useInput({
    initialValue: "",
    errorHandler: (error) => {
      switch (error) {
        case "EmailNotFoundError":
          return "존재하지 않는 이메일입니다";
        case "EmailFormError":
          return "이메일 형식으로 입력해주세요";
        case "EmptyEmailError":
          return "이메일을 입력해주세요";
        case "InternalServerError":
          return "잠시 후 다시 시도해주세요";
        default:
          return "";
      }
    },
  });

  /* 이메일 로그인 시도 처리 */
  const formSubmitHandler: EventType<"form", "onSubmit"> = async (e) => {
    e.preventDefault();

    if (isEmptyString(email)) {
      return handleInputError("EmptyEmailError");
    }
    if (!isEmail(email)) {
      return handleInputError("EmailFormError");
    }

    try {
      const body = { email };
      const isProperEmail: boolean = await apiRequest.post(
        "/v1/auth/verify-email",
        body,
      );
      if (isProperEmail) {
        updateHistory({ type: "push", page: "password" });
        setEmail(email);
      }
    } catch (e) {
      if (isAxiosError(e) && e.code === "401") {
        return handleInputError("EmailNotFoundError");
      }
      console.error(e);
      return handleInputError("InternalServerError");
    }
  };

  const navigatePageHanlder = () => {
    updateHistory({ type: "push", page: "register" });
  };

  return (
    <form className={styles["credentials-login"]} onSubmit={formSubmitHandler}>
      <div className={styles["title"]}>이메일을 입력해주세요</div>
      <div className={styles["subtitle"]}>이메일만 있어도 가입할 수 있어요</div>
      <div className={styles["input"]}>
        <input
          value={email}
          type={"text"}
          placeholder={"이메일을 입력해주세요"}
          onChange={changeHandler}
        />
        <p className={styles["error-message"]}>{errorMessage}</p>
      </div>
      <button type="submit">다음</button>
      <div className={styles["register-btn"]}>
        <p onClick={navigatePageHanlder}>회원가입</p>
      </div>
    </form>
  );
}
