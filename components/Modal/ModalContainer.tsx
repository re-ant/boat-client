"use client";

import { PropsWithChildren } from "react";

import styles from "./ModalContainer.module.scss";

interface Props extends PropsWithChildren {}

export default function ModalContainer({ children }: Props) {
  return <div className={styles["container"]}>{children}</div>;
}
