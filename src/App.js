import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ToyList from "./components/ToyList";
import RentToy from "./components/RentToy";
import MyRentals from "./components/MyRentals";
import AdminToys from "./components/AdminToys";
import ReturnToy from "./components/ReturnToy";

function NotFound() {
  return <h2>404: Page Not Found</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/toys" element={<ToyList />} />
        <Route path="/rents" element={<RentToy />} />
        <Route path="/my-rentals" element={<MyRentals />} />
        <Route path="/admin-toys" element={<AdminToys />} />
        <Route path="/return-toys" element={<ReturnToy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
