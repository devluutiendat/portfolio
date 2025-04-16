import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { api } from "./api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      try {                
        await api.post("/user",user);
      } catch (err) {
        console.error("Error during signIn callback:", err);
      }
      return true;
    },  
  },
});
