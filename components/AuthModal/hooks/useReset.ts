import useAuthModalStore from "components/AuthModal/store/authModalStore";

export default function useReset() {
  const reset = useAuthModalStore((state) => state.reset);

  return { reset };
}
