import React, { useEffect, useState } from "react";
import WaitlistPage from "./WaitlistPage.jsx";
import {
  fetchCourts,
  fetchCoaches,
  fetchEquipment,
  fetchBookings,
  createBooking
} from "../services/api.js";

import CourtSelector from "../components/CourtSelector.jsx";
import EquipmentSelector from "../components/EquipmentSelector.jsx";
import CoachSelector from "../components/CoachSelector.jsx";
import SlotSelector from "../components/SlotSelector.jsx";
import PriceBreakdown from "../components/PriceBreakdown.jsx";

const BookingPage = () => {
  const [courts, setCourts] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState({});
  const [selectedSlot, setSelectedSlot] = useState("");
  const [pricing, setPricing] = useState(null);

  const loadData = async () => {
    setCourts((await fetchCourts()).data);
    setCoaches((await fetchCoaches()).data);
    setEquipment((await fetchEquipment()).data);
  };

  const loadBookings = async () => {
    const res = await fetchBookings();
    setBookings(res.data);
  };

  useEffect(() => {
    loadData();
    loadBookings();
  }, []);

  const handleSubmit = async () => {
    if (!selectedCourt || !selectedSlot) {
      alert("Please select court and time slot");
      return;
    }

    const equipmentArray = Object.entries(selectedEquipment)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => ({ equipmentId: id, quantity: qty }));

    const [startHour] = selectedSlot.split(":");
    const startTime = new Date();
    startTime.setMinutes(0, 0, 0);
    startTime.setHours(Number(startHour));
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 1);

    const bookingData = {
      userName: "Test User",
      courtId: selectedCourt,
      coachId: selectedCoach || null,
      equipment: equipmentArray,
      startTime,
      endTime
    };

    const res = await createBooking(bookingData);

    if (res.data.waitlist) {
      alert(res.data.message);
    } else {
      alert("Booking Successful");
      loadBookings();
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border">
      <h2 className="text-2xl font-extrabold text-blue-600 mb-4">
        Book a Court
      </h2>

      <div className="space-y-4">
        <CourtSelector
          courts={courts}
          selectedCourt={selectedCourt}
          setSelectedCourt={setSelectedCourt}
        />

        <SlotSelector
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />

        <EquipmentSelector
          equipment={equipment}
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
        />

        <CoachSelector
          coaches={coaches}
          selectedCoach={selectedCoach}
          setSelectedCoach={setSelectedCoach}
        />

        <PriceBreakdown pricing={pricing} />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition"
        >
          Confirm Booking
        </button>

        <div className="mt-6">
          <WaitlistPage />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
