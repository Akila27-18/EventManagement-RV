import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetails() {
  const { eventId } = useParams();

  return (
    <div className="mt-6 p-4 border rounded-lg bg-white shadow">
      <h2 className="text-xl font-bold">Event Details</h2>
      <p>Details for event ID: {eventId}</p>
    </div>
  );
}
