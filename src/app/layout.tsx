
import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "../providers/LenisProvider";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
        {children}
        </LenisProvider>
      </body>
    </html>
  );
}
