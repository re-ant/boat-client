import useAuthModalStore from "components/AuthModal/store/authModalStore";
import { useCallback } from "react";

// AuthModal 상태를 변경시키는 액션
export default function useAuthModalAction() {
  const [setTitle, updateHistory] = useAuthModalStore((state) => [
    state.setTitle,
    state.updateHistory,
    state.setEmail,
  ]);
  const showPrevPage = useCallback(
    () => updateHistory({ type: "pop" }),
    [updateHistory],
  );

  return { setTitle, updateHistory, showPrevPage };
}
