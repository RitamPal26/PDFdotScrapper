import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Clerk Integration",
  description: "Next.js app using Clerk for authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-100">
          <SignedIn>{children}</SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
