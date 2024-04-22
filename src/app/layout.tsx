import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio Pedro Santos",
  description: "Pedro Santos's portfolio of a full stack programmer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  )
}
