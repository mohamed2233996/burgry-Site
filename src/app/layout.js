import { Platypi } from "next/font/google";
import "./globals.css";

const platypi = Platypi({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={platypi.className}>{children}</body>
    </html>
  );
}
