import React, { useState } from "react";

const CoachForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [specialization, setSpecialization] = useState(
    initialData?.specialization || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, specialization });
    setName("");
    setSpecialization("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4 bg-white shadow-sm rounded">
      <h3 className="font-semibold mb-2">
        {initialData ? "Edit Coach" : "Add Coach"}
      </h3>
      <input
        type="text"
        placeholder="Coach Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />
      <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
        {initialData ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default CoachForm;
