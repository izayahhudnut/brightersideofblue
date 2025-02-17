"use client";

import { SignIn } from "@clerk/nextjs";

export default function AdminSignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn
        routing="path"
        path="/admin/sign-in"
        appearance={{
          elements: {
            footer: "hidden", // ✅ Hides "Secured by Clerk"
          },
        }}
        signUpUrl={undefined} // ✅ Fix: Set to `undefined` instead of `null`
      />
    </div>
  );
}
