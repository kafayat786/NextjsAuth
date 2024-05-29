import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Message } from "primereact/message";
import { signIn, useSession } from "next-auth/react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const toast = useRef(null);
  const router = useRouter();
  const session = useSession();

  type ToastSeverity = "success" | "info" | "warn" | "error" | "custom";
  interface ToastMessage {
    severity: ToastSeverity;
    summary: string;
    detail: string;
  }
  const toastPrefix: any = toast.current;
  const toastMessage = (status: ToastSeverity, msg: string) => {
    toastPrefix.show({
      severity: status,
      summary: status,
      detail: msg,
    } as ToastMessage);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is Required"),
    }),
    onSubmit: async (values) => {
      const result = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      router.push("/");
      if (result?.error) {
        toastMessage("error", "Invalid Credentials");
      } else {
        toastMessage("success", "Login Sccucessful");
        window.location.href = "/";
      }
    },
  });

  const googleLogin = async () => {
    const result = await signIn("google", {
      redirect: false,
    });

    router.push("/");
    if (result?.error) {
      toastMessage("error", "Invalid Credentials");
    } else {
      // toastMessage("success", "Login Sccucessful");
      window.location.href = "/";
    }
  };

  return (
    <div className="p-fluid">
      {/* <form onSubmit={formik.handleSubmit} className="login-form mt-5">
        <div className="p-field">
          <InputText
            id="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "p-invalid" : ""
            }
          />
          <p>
            {formik.touched.email && formik.errors.email ? (
              <Message severity="error" text={formik.errors.email} />
            ) : null}
          </p>
        </div>

        <div className="p-field my-3 w-100">
          <Password
            placeholder="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.password && formik.errors.password
                ? "p-invalid w-100"
                : "w-100"
            }
            feedback={false}
          />
          <p>
            {formik.touched.password && formik.errors.password ? (
              <Message
                severity="error"
                className="p-1 bg-none"
                text={formik.errors.password}
              />
            ) : null}
          </p>
        </div>
        <Button type="submit" label="Log In" className="my-2" />
      </form> */}
      <Button
        className="text-center  mt-5 justify-center"
        style={{
          backgroundColor: "#f7f7f7",
          color: "#444",
          borderColor: "#222",
        }}
        onClick={googleLogin}
      >
        <i
          className="pi pi-google me-2 "
          style={{ color: "#444", fontSize: "1rem" }}
        />
        Google Log In
      </Button>

      <Toast ref={toast} />
    </div>
  );
};

export default LoginForm;
