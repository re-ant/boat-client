import useAuthModalStore from "components/AuthModal/store/authModalStore";

// AuthModal 에서 사용하는 상태
export default function useAuthModalState() {
  const [title, history] = useAuthModalStore((state) => [
    state.title,
    state.history,
  ]);
  const currentPage = history.at(-1) ?? "home";

  return { title, history, currentPage };
}
