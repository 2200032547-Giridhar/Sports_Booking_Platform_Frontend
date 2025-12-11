import React from "react";
import BookingPage from "./pages/BookingPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-200">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-700">
        Sports Facility Booking System
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <BookingPage />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default App;
