import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h2>opencode helpdesk</h2>
      <Link href="/">Doshboard</Link>
      <br />
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
