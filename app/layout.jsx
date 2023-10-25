// import Link from "next/link";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav>
          <h2>opencode helpdesk</h2>
          <Link href="/">Doshboard</Link>
          <br />
          <Link href="/tickets">Tickets</Link>
        </nav> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
