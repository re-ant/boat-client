"use client";

import useInput from "hooks/useInput";
import { apiRequest } from "libs/ajax";
import { isEmail, isEmptyString } from "libs/utils";
import { signIn } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import EventType from "types/Event";

import styles from "./Register.module.scss";

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 15;

export default function Register() {
  const {
    input: email,
    changeHandler: emailChangeHandler,
    errorMessage: emailErrorMessage,
    handleInputError: handleEmailInputError,
  } = useInput({
    initialValue: "",
    errorHandler: (error) => {
      switch (error) {
        case "EmptyEmailError":
          return "이메일을 입력해주세요";
        case "EmailFormError":
          return "이메일 형식으로 입력해주세요";
        case "EmailDuplicationError":
          return "이미 사용중인 이메일이에요";
        case "InternalServerError":
          return "잠시 후 다시 시도해주세요";
        default:
          return "";
      }
    },
  });
  const {
    input: password,
    changeHandler: passwordChangeHandler,
    errorMessage: passwordErrorMessage,
    handleInputError: handlePasswordInputError,
  } = useInput({
    initialValue: "",
    errorHandler: (error) => {
      switch (error) {
        case "EmptyPasswordError":
          return "비밀번호를 입력해주세요";
        case "ShortPasswordError":
          return "비밀번호가 너무 짧아요";
        case "LongPasswordError":
          return "비밀번호가 너무 길어요";
        case "InternalServerError":
          return "잠시 후 다시 시도해주세요";
        default:
          return "";
      }
    },
  });

  /* 이메일 로컬 검증 로직 */
  const verifyEmailStatic = (email: string) => {
    if (isEmptyString(email)) {
      handleEmailInputError("EmptyEmailError");
      return true;
    }
    if (!isEmail(email)) {
      handleEmailInputError("EmailFormError");
      return true;
    }
    return false;
  };

  /* 비밀번호 로컬 검증 로직 */
  const verifyPasswordStatic = (password: string) => {
    if (isEmptyString(password)) {
      handlePasswordInputError("EmptyPasswordError");
      return true;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      handlePasswordInputError("ShortPasswordError");
      return true;
    }
    if (MAX_PASSWORD_LENGTH < password.length) {
      handlePasswordInputError("LongPasswordError");
      return true;
    }
    return false;
  };

  /* 이메일-비밀번호 회원가입 시도 처리 */
  const formSubmitHandler: EventType<"form", "onSubmit"> = async (e) => {
    e.preventDefault();

    verifyEmailStatic(email);
    verifyPasswordStatic(password);

    if (verifyEmailStatic(email) || verifyPasswordStatic(password)) {
      return;
    }

    try {
      const body = { email, password };
      const response = await apiRequest.post("/v1/user", body);
      if (response.data.userId) {
        /* 가입 성공 시 해당 계정으로 로그인 */
        signIn("credentials", { email, password, redirect: false });
      }
    } catch (e) {
      console.error(e);
      return handlePasswordInputError("InternalServerError");
    }
  };

  return (
    <form className={styles["register"]} onSubmit={formSubmitHandler}>
      <div className={styles["title"]}>
        등록할 이메일과 비밀번호를 입력해주세요
      </div>
      <div className={styles["subtitle"]}>
        비밀번호는 6글자부터 15글자까지 가능해요
      </div>
      <div className={styles["input"]}>
        <input
          value={email}
          type={"text"}
          placeholder={"이메일을 입력해주세요"}
          onChange={emailChangeHandler}
        />
        <p className={styles["error-message"]}>{emailErrorMessage}</p>
      </div>
      <div className={styles["input"]}>
        <input
          value={password}
          type={"password"}
          placeholder={"비밀번호를 입력해주세요"}
          onChange={passwordChangeHandler}
        />
        <p className={styles["error-message"]}>{passwordErrorMessage}</p>
      </div>
      <button type="submit">가입하기</button>
    </form>
  );
}
