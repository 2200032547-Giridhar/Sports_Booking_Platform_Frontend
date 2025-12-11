import React, { useState } from "react";

const PricingRuleForm = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [ruleType, setRuleType] = useState(initialData?.ruleType || "peak");
  const [surcharge, setSurcharge] = useState(initialData?.surcharge || 0);
  const [multiplier, setMultiplier] = useState(initialData?.multiplier || 1);
  const [isEnabled, setIsEnabled] = useState(
    initialData?.isEnabled ?? true
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      ruleType,
      surcharge: Number(surcharge),
      multiplier: Number(multiplier),
      isEnabled
    });
    setName("");
    setRuleType("peak");
    setSurcharge(0);
    setMultiplier(1);
    setIsEnabled(true);
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mb-4 bg-white shadow-sm rounded">
      <h3 className="font-semibold mb-2">
        {initialData ? "Edit Rule" : "Add Pricing Rule"}
      </h3>
      <input
        type="text"
        placeholder="Rule Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
        required
      />
      <select
        value={ruleType}
        onChange={(e) => setRuleType(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      >
        <option value="peak">Peak Hours</option>
        <option value="weekend">Weekend</option>
        <option value="indoorPremium">Indoor Premium</option>
        <option value="equipmentFee">Equipment Fee</option>
        <option value="coachFee">Coach Fee</option>
      </select>
      <input
        type="number"
        placeholder="Surcharge (₹)"
        value={surcharge}
        onChange={(e) => setSurcharge(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />
      <input
        type="number"
        step="0.1"
        placeholder="Multiplier (for peak)"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        className="border p-2 mr-2 mb-2 w-full"
      />
      <label className="mr-2">
        <span className="mr-1">Enabled:</span>
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={() => setIsEnabled(!isEnabled)}
        />
      </label>
      <div className="mt-2">
        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
          {initialData ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default PricingRuleForm;
