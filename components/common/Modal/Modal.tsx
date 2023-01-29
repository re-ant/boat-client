"use client";

import ModalBackground from "components/common/Modal/ModalBackground";
import ModalContainer from "components/common/Modal/ModalContainer";
import ModalPortal from "components/common/Modal/ModalPortal";
import EventType from "types/Event";
import { ModalComponentProps } from "types/Modal";

interface Props extends ModalComponentProps {}

export default function Modal({ children, onClose, ...props }: Props) {
  const backgroundClickHandler: EventType<"div", "onClick"> = (e) => {
    if (e.currentTarget !== e.target) {
      return;
    }
    onClose();
  };

  return (
    <ModalPortal>
      <ModalBackground onClick={backgroundClickHandler}>
        <ModalContainer>{children}</ModalContainer>
      </ModalBackground>
    </ModalPortal>
  );
}
