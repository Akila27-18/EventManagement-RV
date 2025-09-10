import React from "react";
import { Routes, Route } from "react-router-dom";
import EventsPage from "./EventsPage";
import EventDetails from "./EventDetails";

export default function EventRouteWrapper() {
  return (
    <Routes>
      <Route index element={<EventsPage />} />
      <Route path=":eventId" element={<EventDetails />} />
    </Routes>
  );
}
