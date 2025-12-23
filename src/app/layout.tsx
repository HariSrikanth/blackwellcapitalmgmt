import "~/styles/globals.css";

import { type Metadata } from "next";
import { Judson } from "next/font/google";
import { Providers } from "~/components/Providers";

export const metadata: Metadata = {
  title: "Blackwell Capital Management",
  description: "Blackwell Capital Management - Investment Management",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-judson",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={judson.variable}>
      <body className="m-0 p-0 antialiased" style={{ fontFamily: "Judson, serif" }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
