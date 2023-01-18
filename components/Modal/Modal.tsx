"use client";

import ModalBackground from "components/Modal/ModalBackground";
import ModalContainer from "components/Modal/ModalContainer";
import ModalPortal from "components/Modal/ModalPortal";
import EventType from "types/event";
import { ModalComponentProps } from "types/modal";

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
