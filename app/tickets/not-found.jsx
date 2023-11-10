import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Sorry but Nothing.</h2>
        <p>We Could not Find the Page you Were Looking for.</p>
        <p>Go Back to All <Link href="/tickets">Tickets</Link> </p>
    </main>
  )
}
