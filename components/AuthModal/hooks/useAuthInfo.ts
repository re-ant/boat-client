import useAuthModalStore from "components/AuthModal/store/authModalStore";

export default function useAuthInfo() {
  const [email, setEmail] = useAuthModalStore((state) => [
    state.email,
    state.setEmail,
  ]);

  return { email, setEmail };
}
