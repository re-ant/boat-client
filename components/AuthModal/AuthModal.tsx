"use client";

import CredentialsLogin from "components/AuthModal/CredentialsLogin";
import SocialLogin from "components/AuthModal/SocialLogin";
import Modal from "components/Modal/Modal";
import ModalHeader from "components/Modal/ModalHeader";
import React from "react";
import { ModalComponentProps, ModalProps } from "types/modal";

import styles from "./AuthModal.module.scss";

interface Props extends ModalComponentProps {}

export default function AuthModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <ModalHeader
        title={"로그인"}
        rightButton={{
          onClose: onClose,
        }}
      />
      <div className={styles["contents"]}>
        <CredentialsLogin />
        <SocialLogin />
      </div>
    </Modal>
  );
}
