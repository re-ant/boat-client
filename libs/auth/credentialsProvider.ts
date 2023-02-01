import { apiRequest } from "libs/ajax";
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
    const { email, password } = parseCredentials(credentials);

    try {
      const { data } = await apiRequest.post(
        "/v1/auth/login",
        {
          email,
          password,
        },
        { headers: { ContentType: "application/json" } },
      );
      return { user: data.id } as any;
    } catch (e) {
      throw e;
    }
  },
});

export default credentialsProvider;
