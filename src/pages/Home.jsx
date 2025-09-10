import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Event Manager 🎉</h2>
      <p className="mb-4">Browse and register for exciting events.</p>
      <Link to="/events" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
        View Events
      </Link>
    </div>
  );
}
