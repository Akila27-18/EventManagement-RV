import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-red-500 mb-2">404 - Page Not Found</h2>
      <Link to="/" className="text-indigo-600 underline">
        Go back Home
      </Link>
    </div>
  );
}
