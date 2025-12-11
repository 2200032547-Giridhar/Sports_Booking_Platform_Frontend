import React from "react";

const EquipmentSelector = ({ equipment, selectedEquipment, setSelectedEquipment }) => {
  const handleChange = (id, quantity) => {
    setSelectedEquipment((prev) => ({
      ...prev,
      [id]: Number(quantity)
    }));
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-1">Select Equipment</h3>
      {equipment.map((item) => (
        <div key={item._id} className="flex items-center mb-2">
          <label className="flex-1">
            {item.name} (Available: {item.totalStock})
          </label>
          <input
            type="number"
            min="0"
            max={item.totalStock}
            className="border p-1 w-20"
            value={selectedEquipment[item._id] || 0}
            onChange={(e) => handleChange(item._id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default EquipmentSelector;
