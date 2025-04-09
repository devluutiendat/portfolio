import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { api } from "./api";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      await api.post("/users",user);
      return true
    },  
  }
})