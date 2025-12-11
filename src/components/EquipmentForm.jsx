import React, { useState } from "react";

const EquipmentForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [totalStock, setTotalStock] = useState(initialData?.totalStock || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, totalStock: Number(totalStock) });
    setName("");
    setTotalStock(0);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4 bg-white shadow-sm rounded">
      <h3 className="font-semibold mb-2">
        {initialData ? "Edit Equipment" : "Add Equipment"}
      </h3>
      <input
        type="text"
        placeholder="Equipment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Total Stock"
        value={totalStock}
        onChange={(e) => setTotalStock(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
        min="0"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
        {initialData ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default EquipmentForm;
