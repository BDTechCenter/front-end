"use client"

import SignInButton from "@/components/base/sso/SignInButton";
import { Button } from "@/components/ui/button";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
      <>
          <AuthenticatedTemplate>
              <Button onClick={() => router.push("/home")} className="rounded-md" size="lg">Request Profile Information</Button>
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
            <p>Please sign in</p>
            <SignInButton />
          </UnauthenticatedTemplate>
      </>
  );
}