"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import LoginForm from "../../../../components/common/LoginForm";

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      // router.push("/");
    }
  }, [session]);

  return (
    <Suspense>
      <div>
        <div
          className="flex login-screen justify-center align-middle items-center"
          style={{ height: "60vh" }}
        >
          <div className="w-[400px] py-5">
            <div className="text-center">
              <h1 className="font-bold">Log In</h1>
            </div>
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
