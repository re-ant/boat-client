"use client";

import EventType from "types/event";

import styles from "./SocialButton.module.scss";

interface Props {
  textContent: string;
  icon: JSX.Element;
  onClick: EventType<"div", "onClick">;
  divider?: boolean;
  textColor?: string;
  backgroundColor?: string;
  outlineColor?: string;
}

export default function SocialButton({
  textContent,
  icon,
  onClick,
  divider = true,
  textColor,
  backgroundColor,
  outlineColor,
}: Props) {
  return (
    <div
      className={styles["social-button"]}
      style={{
        color: textColor,
        backgroundColor,
        outlineColor,
      }}
      role={"button"}
      onClick={onClick}
    >
      {icon}
      {divider && <div className={styles["divider"]} />}
      <div className={styles["text-content"]}>{textContent}</div>
    </div>
  );
}
