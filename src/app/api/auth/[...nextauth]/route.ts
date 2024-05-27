import NextAuth from "next-auth";
import nextAuthOptions from "../../../../utils/nextAuthOptions";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
