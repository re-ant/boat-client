"use client";

import AuthModalContents from "components/AuthModal/AuthModalContents";
import useAuthModalAction from "components/AuthModal/hooks/useAuthModalAction";
import useAuthModalState from "components/AuthModal/hooks/useAuthModalState";
import useReset from "components/AuthModal/hooks/useReset";
import Modal from "components/common/Modal/Modal";
import ModalHeader from "components/common/Modal/ModalHeader";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { ModalComponentProps } from "types/Modal";

export default function AuthModal({ onClose }: ModalComponentProps) {
  const { status } = useSession();
  const { title, history, currentPage } = useAuthModalState();
  const { showPrevPage } = useAuthModalAction();
  const { reset } = useReset();

  // 로그인 상태 변경을 감지하고, 로그인 상태일 경우 모달 종료
  useEffect(() => {
    if (status === "authenticated") {
      onClose(); // 모달 닫기
      reset(); // 모달 정보 초기화
    }
  }, [status]);

  return (
    <Modal onClose={onClose}>
      <ModalHeader
        title={title}
        leftButton={{
          active: 1 < history.length,
          onClick: showPrevPage,
        }}
        rightButton={{
          active: true,
          onClick: onClose,
        }}
      />
      <AuthModalContents page={currentPage} />
    </Modal>
  );
}
