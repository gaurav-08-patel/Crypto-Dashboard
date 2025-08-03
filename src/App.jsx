import DashBoard from "./pages/DashBoard/DashBoard";
import Support from "./pages/Support/Support";
import Transactions from "./pages/Transactions/Transactions";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<DashBoard />} />
        <Route index path="/transactions" element={<Transactions />} />
        <Route index path="/support" element={<Support />} />
      </Routes>
    </>
  );
}

export default App;
