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
          <div className="w-[400px] ">
            <div className="text-center">
              <h1>Welcome Back</h1>
              <p>LogIn to your Activity</p>
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