import { ModalComponent, ModalContext, ModalProps } from "types/modal";
import { create } from "zustand";

interface ModalState {
  modals: ModalContext[];
}

interface ModalAction {
  openModal: (component: ModalComponent, props: ModalProps) => void;
  closeModal: (component: ModalComponent) => void;
}

const useModalStore = create<ModalState & ModalAction>((set) => ({
  modals: [],
  openModal: (component, props) =>
    set((state) => ({
      modals: [...state.modals, { component, props }],
    })),
  closeModal: (component) =>
    set((state) => ({
      modals: state.modals.filter((ctx) => ctx.component !== component),
    })),
}));

export function useModals() {
  const modals = useModalStore((state) => state.modals);

  return modals;
}

export function useModalAction() {
  const [openModal, closeModal] = useModalStore((store) => [
    store.openModal,
    store.closeModal,
  ]);

  return { openModal, closeModal };
}
