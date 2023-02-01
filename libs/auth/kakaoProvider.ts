import { KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET } from "configs/env.server";
import KakaoProvider from "next-auth/providers/kakao";

const kakaoProvider = KakaoProvider({
  clientId: KAKAO_CLIENT_ID,
  clientSecret: KAKAO_CLIENT_SECRET,
});

export default kakaoProvider;
