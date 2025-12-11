import React from "react";

const SlotSelector = ({ selectedSlot, setSelectedSlot }) => {
  const slots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1">Select Time Slot</h3>
      <select
        className="border p-2 w-full"
        value={selectedSlot || ""}
        onChange={(e) => setSelectedSlot(e.target.value)}
      >
        <option value="">--Select Slot--</option>
        {slots.map((slot) => (
          <option key={slot} value={slot}>
            {slot} - {Number(slot.split(":")[0]) + 1}:00
          </option>
        ))}
      </select>
    </div>
  );
};

export default SlotSelector;
