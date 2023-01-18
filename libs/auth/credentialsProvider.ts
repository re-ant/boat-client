import { API_SERVER_URL } from "configs/env.server";
import { NoCredentialError } from "libs/error";
import CredentialsProvider from "next-auth/providers/credentials";

const parseCredentials = (
  credentials: Record<"email" | "password", string> | undefined,
) => {
  const email = credentials?.email;
  const password = credentials?.password;

  if (!email) {
    throw new NoCredentialError("email");
  }
  if (!password) {
    throw new NoCredentialError("password");
  }

  return { email, password };
};

const credentialsProvider = CredentialsProvider({
  id: "credentials",
  name: "로그인",
  credentials: {
    email: {
      label: "email",
      type: "email",
      placeholder: "이메일을 입력해주세요",
    },
    password: { label: "password", type: "password" },
  },
  async authorize(credentials) {
    try {
      const { email, password } = parseCredentials(credentials);

      // const res = await fetch(`${API_SERVER_URL}/auth/credentials`, {
      //   method: "POST",
      //   body: JSON.stringify({ id, password }),
      //   headers: { "Content-Type": "application/json" },
      // });
      // const user = await res.json();

      const user = {
        id: 1,
        name: "J Smith",
        email: "jsmith@example.com",
      } as any;

      if (user) {
        return user;
      }
      return user;
    } catch (e) {
      return null;
    }
  },
});

export default credentialsProvider;
