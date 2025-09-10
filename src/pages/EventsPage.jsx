import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import EventDetails from "./EventDetails";

const dummyEvents = [
  { id: 1, name: "Tech Conference", date: "2025-10-20", location: "New York" },
  { id: 2, name: "Music Festival", date: "2025-11-05", location: "Los Angeles" },
];

export default function EventsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-3">
        {dummyEvents.map((event) => (
          <li key={event.id} className="p-4 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p>{event.date} - {event.location}</p>
            <Link
              to={`/events/${event.id}`}
              className="text-indigo-600 underline mt-2 inline-block"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=":eventId" element={<EventDetails />} />
      </Routes>
    </div>
  );
}
