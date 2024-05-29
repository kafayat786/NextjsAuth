import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const nextAuthOptions : NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as any,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    }),
    //  CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", name: "email", type: "email" },
    //     password: { label: "Password", name: "password", type: "password" },
    //   },
    //   async authorize(credentials:any, req) {
    //     if (
    //       credentials.email === "admin@cretesol.com" &&
    //       credentials.password === "admin@123"
    //     ) {
    //       // Include role in the user object
    //       return { id: 1, email: "admin@cretesol.com", role: "admin" } as any;
    //     }
    //     return null;
    //   },
    // }),
    
  ],
  // callbacks: {
  //   async jwt({ user, token }:any) {
  //     if (user) {
  //       // Add user information and role to the token
  //       token.id = user.id;
  //       token.email = user.email;
  //       token.role = user.role; // Add role to token
  //     }

  //     return token;
  //   },

  //   async session({ token, user, session } :any) {
   
  //     session.user = {
  //       id: token.id,
  //       email: token.email,
  //       role: token.role, // Add role to session
  //     };
  //     return session;

  //     // return null;
  //   },
  // },
  // jwt: {
  //   maxAge: 60 * 60 * 24 * 1,
  // },
  // pages: {
  //   signIn: "/auth/login",
  // },
};

export default nextAuthOptions;
