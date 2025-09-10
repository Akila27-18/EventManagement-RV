// App.jsx (Main Application with Router)
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import Profile from "./pages/Profile";
import EventRouteWrapper from "./pages/EventRouteWrapper";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-6">
        <header className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Event Manager</h1>
          <nav className="flex gap-3 items-center">
            <Link to="/" className="text-indigo-600">Home</Link>
            <Link to="/events" className="text-indigo-600">Events</Link>
            <Link to="/profile" className="text-indigo-600">Profile</Link>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/*" element={<EventRouteWrapper />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
