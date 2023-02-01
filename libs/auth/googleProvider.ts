import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "configs/env.server";
import GoogleProvider from "next-auth/providers/google";

const googleProvider = GoogleProvider({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
});

export default googleProvider;
