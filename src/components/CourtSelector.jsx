import React from "react";

const CourtSelector = ({ courts, selectedCourt, setSelectedCourt }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1">Select Court</h3>
      <select
        className="border p-2 w-full"
        value={selectedCourt || ""}
        onChange={(e) => setSelectedCourt(e.target.value)}
      >
        <option value="">--Select Court--</option>
        {courts.map((court) => (
          <option key={court._id} value={court._id}>
            {court.name} ({court.type})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourtSelector;
