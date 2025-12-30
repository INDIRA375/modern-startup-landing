import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sammunat | Empowering Innovation",
  description: "Sammunat LLC Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
