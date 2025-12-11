import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "https://sports-booking-platform-backend-1.onrender.com/api/waitlist";

export default function WaitlistPage() {
  const [list, setList] = useState([]);

  const loadWaitlist = async () => {
    const res = await axios.get(API);
    setList(res.data);
  };

  useEffect(() => {
    loadWaitlist();
  }, []);

  const acceptBooking = async (id) => {
    await axios.post(`${API}/accept/${id}`);
    alert("Booking confirmed!");
    loadWaitlist();
  };

  const removeEntry = async (id) => {
    await axios.delete(`${API}/${id}`);
    alert("Removed from waitlist");
    loadWaitlist();
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-purple-600">Waitlist</h2>

      {list.length === 0 ? (
        <p className="text-gray-600">No waitlisted bookings.</p>
      ) : (
        <table className="w-full border bg-white rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Court</th>
              <th className="p-2 border">Start</th>
              <th className="p-2 border">End</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item._id} className="border">
                <td className="p-2">{item.userName}</td>
                <td className="p-2">{item.court?.name}</td>
                <td className="p-2">
                  {new Date(item.startTime).toLocaleString()}
                </td>
                <td className="p-2">
                  {new Date(item.endTime).toLocaleString()}
                </td>

                <td className="p-2 space-x-2">
                  <button
                    onClick={() => acceptBooking(item._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => removeEntry(item._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
