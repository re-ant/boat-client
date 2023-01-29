"use client";

import { PropsWithChildren } from "react";
import EventType from "types/Event";

import styles from "./ModalBackground.module.scss";

interface Props extends PropsWithChildren {
  onClick: EventType<"div", "onClick">;
}

export default function ModalBackground({ children, onClick }: Props) {
  return (
    <div onClick={onClick} className={styles["background"]}>
      {children}
    </div>
  );
}
