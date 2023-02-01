import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from "configs/env.server";
import NaverProvider from "next-auth/providers/naver";

const naverProvider = NaverProvider({
  clientId: NAVER_CLIENT_ID,
  clientSecret: NAVER_CLIENT_SECRET,
});

export default naverProvider;
