import { AuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";

export const authenticationOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
      profile: (profile: GithubProfile) => {
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
          login: profile.login,
          bio: profile.bio,
        };
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

    async jwt({ token, account, profile }) {
      // Adiciona dados do perfil ao token
      if (account && profile) {
        token = profile as GithubProfile
      }
      return token as GithubProfile;
    },

    async session({ session, token }) {
      const sessionToken = token as GithubProfile;
      // Adiciona os dados do token na sessão
      if (token && session.user) {
        session.user.name = sessionToken.name;
        session.user.email = sessionToken.email;
        session.user.image = sessionToken.avatar_url;
        session.user.login = sessionToken.login;
        session.user.bio = sessionToken.bio;
      }
      return session;
    },
  },
};

export default authenticationOptions;
