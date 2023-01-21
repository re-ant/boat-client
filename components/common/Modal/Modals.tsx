"use client";

import React, { useCallback } from "react";
import { useModalAction, useModals } from "store/useModalStore";

export default function Modals() {
  const modals = useModals();
  const { closeModal } = useModalAction();

  return (
    <>
      {modals.map((ctx, idx) => {
        const { component: Modal, props } = ctx;
        const modalCloseHandler = () => closeModal(Modal);

        return <Modal props={props} onClose={modalCloseHandler} key={idx} />;
      })}
    </>
  );
}
