// services/api.js
import { createContext } from "react";

export const api = createContext(null);

export const ApiProvider = ({ children }) => {
  const url = "http://localhost:8050";
  const addPet = "/POST/pets";
  const getPets = "/GET/pets";
  const adoptPet = "/PATCH/pets/:id/adopt";
  const deletePet = "/DELETE/pets/:id";

  const apiContextValue = {
    addPet,
    url,
    getPets,
    adoptPet,
    deletePet
  };

  return (
    <api.Provider value={apiContextValue}>
      {children}
    </api.Provider>
  );
};
