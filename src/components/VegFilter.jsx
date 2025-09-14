import React from 'react';

const VegFilter = ({ vegFilter, nonVegFilter, onVegChange, onNonVegChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <label className="flex items-center gap-2 cursor-pointer">
        <input 
          type="checkbox" 
          checked={vegFilter}
          onChange={(e) => onVegChange(e.target.checked)}
          className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
        />
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          Veg
        </span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <input 
          type="checkbox" 
          checked={nonVegFilter}
          onChange={(e) => onNonVegChange(e.target.checked)}
          className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
        />
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          Non-Veg
        </span>
      </label>
    </div>
  );
};

export default VegFilter;