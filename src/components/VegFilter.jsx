import React from 'react';
import Switch from './Toggle';

const VegFilter = ({ vegFilter, nonVegFilter, onVegChange, onNonVegChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-8 mb-6">
      <div className="flex items-center gap-3">
        <Switch
          isOn={vegFilter}
          onToggle={() => onVegChange(!vegFilter)}
          color="green"
        />
        <span className="select-none text-sm text-gray-800 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-600" />
          Veg
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Switch
          isOn={nonVegFilter}
          onToggle={() => onNonVegChange(!nonVegFilter)}
          color="red"
        />
        <span className="select-none text-sm text-gray-800 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-600" />
          Non-Veg
        </span>
      </div>
    </div>
  );
};

export default VegFilter;