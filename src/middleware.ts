import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  // callbacks: {
  //   authorized(params) {
  //     return !!params?.token?.accessToken;
  //   },
  // },
});

export const config = {
  matcher: ["/((?!api/auth|auth|_next/static|_next/image|favicon.ico).*)"],
};
