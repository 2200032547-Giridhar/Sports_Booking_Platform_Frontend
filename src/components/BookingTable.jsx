import React from "react";

const BookingTable = ({ bookings }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-sm rounded">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr className="border-b">
            <th className="p-2 text-left">User</th>
            <th className="p-2 text-left">Court</th>
            <th className="p-2 text-left">Coach</th>
            <th className="p-2 text-left">Start</th>
            <th className="p-2 text-left">End</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="border-b">
              <td className="p-2">{b.userName}</td>
              <td className="p-2">{b.court?.name}</td>
              <td className="p-2">{b.coach?.name || "N/A"}</td>
              <td className="p-2">
                {new Date(b.startTime).toLocaleString()}
              </td>
              <td className="p-2">
                {new Date(b.endTime).toLocaleString()}
              </td>
              <td className="p-2 capitalize">{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
