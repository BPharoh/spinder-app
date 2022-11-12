import React from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthModal from "./components/AuthModal";
// import Auth from "./components/Auth";
// import { useUserContext } from "./context/UserContext";
// import { useState } from "react";

function App() {
  // const { user, loading, error } = useUserContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<AuthModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
