import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import { AddPetForm } from './components/AddPetForm';
import { ApiProvider } from "./services/ApiProvider";
import PetList from "./components/PetList";

function App() {
  return (
    <>
      <ToastContainer />
      <Header/>
      <ApiProvider>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPetForm />} />
        <Route path="/viewAll" element={<PetList />} />
      </Routes>
      </ApiProvider>
      
    </>
  );
}

export default App;
