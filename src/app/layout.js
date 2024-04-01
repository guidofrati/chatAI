import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReadyChatAI",
  description: "FrontEnd Intership for ReadyChatAI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-fondo ${inter.className}`}>{children}</body>
    </html>
  );
}
