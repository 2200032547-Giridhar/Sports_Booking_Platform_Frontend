import React from "react";

const PriceBreakdown = ({ pricing }) => {
  if (!pricing) return null;

  return (
    <div className="mt-4 p-3 border rounded bg-white shadow-sm">
      <h3 className="font-semibold mb-2">Price Breakdown</h3>
      <ul className="space-y-1 text-sm">
        <li>Base Price: ₹{pricing.basePrice}</li>
        <li>Peak Fee: ₹{pricing.peakFee}</li>
        <li>Weekend Fee: ₹{pricing.weekendFee}</li>
        <li>Indoor Fee: ₹{pricing.indoorFee}</li>
        <li>Equipment Fee: ₹{pricing.equipmentFee}</li>
        <li>Coach Fee: ₹{pricing.coachFee}</li>
        <li className="font-bold mt-2">Total: ₹{pricing.total}</li>
      </ul>
    </div>
  );
};

export default PriceBreakdown;
