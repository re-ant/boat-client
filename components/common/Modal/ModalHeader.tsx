"use client";

import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ModalHeader.module.scss";

interface Props {
  title: string;
  leftButton?: {
    active: boolean;
    onClick: Function;
  };
  rightButton?: {
    active: boolean;
    onClick: Function;
  };
}

export default function ModalHeader({ title, leftButton, rightButton }: Props) {
  return (
    <div className={styles.header}>
      <a>
        {leftButton?.active && (
          <FontAwesomeIcon
            className={styles.button}
            icon={faChevronLeft}
            onClick={() => leftButton.onClick()}
          />
        )}
      </a>
      <p>{title}</p>
      <a>
        {rightButton?.active && (
          <FontAwesomeIcon
            className={styles.button}
            icon={faXmark}
            onClick={() => rightButton.onClick()}
          />
        )}
      </a>
    </div>
  );
}
