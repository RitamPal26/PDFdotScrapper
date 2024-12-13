"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
            },
          }}
        />
      </div>
    </div>
  );
}
