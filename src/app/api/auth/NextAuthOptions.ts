import { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authenticationOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "repo",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      if (account && !account.access_token) {
        return "/?error=unauthenticated";
      }
      return true;
    },
  },

};


export default authenticationOptions;
