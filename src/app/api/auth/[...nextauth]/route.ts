import NextAuth from "next-auth";
import authenticationOptions from "../NextAuthOptions";

const handler = NextAuth(authenticationOptions);
export { handler as GET, handler as POST };
