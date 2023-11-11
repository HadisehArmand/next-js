import Link from "next/link";
import { cookies } from "next/headers";
import { getCookies } from "cookies-next";
import { setCookie, getCookie } from "cookies-next";
// import { useCookies } from "react-cookie";

async function getTickets() {
  // adding more Delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const res = await fetch(
    "https://654ccfde77200d6ba85977b0.mockapi.io/api/token/token",
    {
      next: {
        revalidate: 0,
      },
    }
  );

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  tickets.map((ticket) => setCookie(ticket.id, ticket.token, { maxAge: 20 }));

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
            <div>{getCookie(ticket.token)}</div>
          </Link>
        </div>
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are No Tickets</p>
      )}
    </>
  );
}
