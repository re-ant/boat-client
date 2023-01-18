"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ModalHeader.module.scss";

interface Props {
  title: string;
  rightButton?: {
    onClose: Function;
  };
}

export default function ModalHeader({ title, rightButton }: Props) {
  return (
    <div className={styles.header}>
      <a></a>
      <p>{title}</p>
      <a>
        {rightButton && (
          <FontAwesomeIcon
            className={styles.button}
            icon={faXmark}
            onClick={() => rightButton.onClose()}
          />
        )}
      </a>
    </div>
  );
}
