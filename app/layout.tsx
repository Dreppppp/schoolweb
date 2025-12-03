import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/providers/AOSprovider";

export const metadata: Metadata = {
  title: "Школа",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-white text-black dark:bg-black dark:text-white antialiased">
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
