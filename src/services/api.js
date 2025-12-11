import axios from "axios";

const API = axios.create({
  baseURL: "https://sports-booking-platform-backend-1.onrender.com/api"
});


// Public / booking
export const fetchCourts = () => API.get("/courts");
export const fetchCoaches = () => API.get("/coaches");
export const fetchEquipment = () => API.get("/equipment");
export const fetchPricingRules = () => API.get("/pricing-rules");
export const fetchBookings = () => API.get("/bookings");
export const createBooking = (data) => API.post("/bookings", data);

// Admin CRUD
export const createCourt = (data) => API.post("/courts", data);
export const createCoach = (data) => API.post("/coaches", data);
export const createEquipmentApi = (data) => API.post("/equipment", data);
export const createPricingRuleApi = (data) => API.post("/pricing-rules", data);
