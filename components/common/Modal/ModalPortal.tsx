"use client";

import useBrowser from "hooks/useBrowser";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface Props extends PropsWithChildren {}

export default function ModalPortal({ children }: Props) {
  const mounted = useBrowser();
  const element = mounted && document?.getElementById("modal");

  if (!mounted || !element) {
    return null;
  }
  return createPortal(children, element);
}
