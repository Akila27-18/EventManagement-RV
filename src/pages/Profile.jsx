import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, participations } = useAuth();

  if (!user) {
    return <p className="text-red-500">Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="mt-2">Hello, {user.name} 👋</p>
      <h3 className="mt-4 font-semibold">Your Participations:</h3>
      <ul className="list-disc ml-6">
        {participations.length > 0 ? (
          participations.map((id) => <li key={id}>Event #{id}</li>)
        ) : (
          <p>No events registered yet.</p>
        )}
      </ul>
    </div>
  );
}
