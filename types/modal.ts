export type ModalProps = {
  [key: string]: any;
};
export interface ModalComponentProps
  extends ModalProps,
    React.PropsWithChildren {
  onClose: Function;
}
export type ModalComponent = (props: ModalComponentProps) => React.ReactElement;
export interface ModalContext {
  component: ModalComponent;
  props: ModalProps;
}
