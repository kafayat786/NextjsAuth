"use client";

import Icon from "@/components/common/Icon";
import ValidationErrors from "@/components/common/ValidatinErrors";
import useForgotPassword from "@/hooks/forgotPassword";
import { Button, Card, Input, Spinner } from "@nextui-org/react";
import { IconMailForward } from "@tabler/icons-react";
import Link from "next/link";

export default function ForgetPasswordPage() {
  const { data, handleData, handleSubmit, error, loading } =
    useForgotPassword();

  return (
    <Card
      shadow="none"
      className="border border-default-300 p-4 w-96"
      radius="lg"
    >
      <div className="text-large font-bold text-center mb-4">Logo</div>
      {!!error && <ValidationErrors exception={error} className="mb-2" />}
      <form onSubmit={handleSubmit}>
        <Input
          isRequired
          type="email"
          name="email"
          placeholder="Email"
          isDisabled={loading}
          className="mb-2"
          value={data?.email}
          onValueChange={(value) => handleData(value)}
          description="To reset your password, please enter the email address associated with your account. We will then send you a link to create a new password."
        />
        <div className="flex items-center justify-between mt-4">
          <Button
            as={Link}
            variant="light"
            radius="full"
            color="secondary"
            href="/auth/login"
            isDisabled={loading}
          >
            Login
          </Button>
          <Button
            startContent={
              loading ? (
                <Spinner size="sm" color="current" />
              ) : (
                <Icon TbIcon={IconMailForward} />
              )
            }
            type="submit"
            radius="full"
            color="primary"
            isDisabled
          >
            Send Email
          </Button>
        </div>
      </form>
    </Card>
  );
}
