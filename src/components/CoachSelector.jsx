import React from "react";

const CoachSelector = ({ coaches, selectedCoach, setSelectedCoach }) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1">Select Coach (Optional)</h3>
      <select
        className="border p-2 w-full"
        value={selectedCoach || ""}
        onChange={(e) => setSelectedCoach(e.target.value)}
      >
        <option value="">--No Coach--</option>
        {coaches.map((coach) => (
          <option key={coach._id} value={coach._id}>
            {coach.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CoachSelector;
