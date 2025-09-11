import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [participations, setParticipations] = useState([]);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  const registerEvent = (eventId) => {
    if (!participations.includes(eventId)) {
      setParticipations([...participations, eventId]);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, participations, registerEvent }}>
      {children}
    </AuthContext.Provider>
  );
};
