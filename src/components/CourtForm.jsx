import React, { useState } from "react";

const CourtForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [type, setType] = useState(initialData?.type || "indoor");
  const [basePrice, setBasePrice] = useState(initialData?.basePrice || 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, type, basePrice: Number(basePrice) });
    setName("");
    setType("indoor");
    setBasePrice(500);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4 bg-white shadow-sm rounded">
      <h3 className="font-semibold mb-2">
        {initialData ? "Edit Court" : "Add Court"}
      </h3>
      <input
        type="text"
        placeholder="Court Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      >
        <option value="indoor">Indoor</option>
        <option value="outdoor">Outdoor</option>
      </select>
      <input
        type="number"
        placeholder="Base Price"
        value={basePrice}
        onChange={(e) => setBasePrice(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
        {initialData ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default CourtForm;
