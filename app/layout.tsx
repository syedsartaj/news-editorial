import type { Metadata } from "next";
import { Libre_Baskerville, Roboto } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "The Herald - Breaking News & World Updates",
  description: "Your trusted source for breaking news, politics, business, technology, and world events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${roboto.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
