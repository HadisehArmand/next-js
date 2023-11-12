import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch(
    "https://654ccfde77200d6ba85977b0.mockapi.io/api/token/token"
  );
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
  function middleware(req) {}
}

async function getTickets(id) {
  //adding more Delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  const res = await fetch(
    "https://654ccfde77200d6ba85977b0.mockapi.io/api/token/token" / +id,
    {
      next: {
        revalidate: 5,
      },
    }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTickets(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <br />
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
