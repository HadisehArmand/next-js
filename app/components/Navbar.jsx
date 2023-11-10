import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h2>helpdesk</h2>
      <Link href="/">Doshboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/create">Create</Link>
    </nav>
  );
}
