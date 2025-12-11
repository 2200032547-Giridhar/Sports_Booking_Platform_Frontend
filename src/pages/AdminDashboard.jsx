import React, { useEffect, useState } from "react";
import CourtForm from "../components/CourtForm.jsx";
import CoachForm from "../components/CoachForm.jsx";
import EquipmentForm from "../components/EquipmentForm.jsx";
import PricingRuleForm from "../components/PricingRuleForm.jsx";
import BookingTable from "../components/BookingTable.jsx";
import {
  fetchCourts,
  fetchCoaches,
  fetchEquipment,
  fetchPricingRules,
  fetchBookings,
  createCourt,
  createCoach,
  createEquipmentApi,
  createPricingRuleApi
} from "../services/api.js";

const AdminDashboard = () => {
  const [courts, setCourts] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [pricingRules, setPricingRules] = useState([]);
  const [bookings, setBookings] = useState([]);

  const loadAll = async () => {
    setCourts((await fetchCourts()).data);
    setCoaches((await fetchCoaches()).data);
    setEquipment((await fetchEquipment()).data);
    setPricingRules((await fetchPricingRules()).data);
    setBookings((await fetchBookings()).data);
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleAddCourt = async (data) => {
    await createCourt(data);
    loadAll();
  };

  const handleAddCoach = async (data) => {
    await createCoach(data);
    loadAll();
  };

  const handleAddEquipment = async (data) => {
    await createEquipmentApi(data);
    loadAll();
  };

  const handleAddPricingRule = async (data) => {
    await createPricingRuleApi(data);
    loadAll();
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-extrabold text-green-600 mb-4">
        Admin Dashboard
      </h2>

      <section className="grid md:grid-cols-2 gap-6 mb-6">
        <CourtForm onSubmit={handleAddCourt} />
        <CoachForm onSubmit={handleAddCoach} />
        <EquipmentForm onSubmit={handleAddEquipment} />
        <PricingRuleForm onSubmit={handleAddPricingRule} />
      </section>

      <section>
        <h3 className="text-xl font-bold mb-3">All Bookings</h3>
        <BookingTable bookings={bookings} />
      </section>
    </div>
  );
};

export default AdminDashboard;
