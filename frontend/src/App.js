import React from "react";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import { ApiProvider } from "./services/ApiProvider";

function App() {
  return (
    <>
      <ToastContainer />
      <ApiProvider>
        <HomePage />
      </ApiProvider>
    </>
  );
}

export default App;
