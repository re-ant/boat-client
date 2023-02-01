"use client";

import FindAccount from "components/AuthModal/FindAccount";
import Home from "components/AuthModal/Home";
import PasswordLogin from "components/AuthModal/PasswordLogin";
import Register from "components/AuthModal/Register";
import React from "react";
import { PageType } from "types/AuthModal";

import styles from "./AuthModalContents.module.scss";

const contents = {
  home: <Home />,
  password: <PasswordLogin />,
  register: <Register />,
  "find-account": <FindAccount />,
};

interface Props {
  page: PageType;
}

export default function AuthModalContents({ page }: Props) {
  const content = contents[page];

  return (
    <div className={styles["container"]}>
      <div className={styles["contents"]}>{content}</div>,
    </div>
  );
}
