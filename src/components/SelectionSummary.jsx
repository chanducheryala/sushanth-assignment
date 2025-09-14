import React from 'react';

const SelectionSummary = ({ 
  totalCount, 
  mealTypes, 
  getSelectedCountByMealType, 
  onContinue 
}) => {
  return (
    <div className="bg-white border-t border-gray-200 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Total Selected Dishes: {totalCount}</p>
          <div className="text-sm text-gray-600 mt-1">
            {mealTypes.map(mealType => {
              const count = getSelectedCountByMealType(mealType);
              return count > 0 ? `${mealType}: ${count}` : null;
            }).filter(Boolean).join(' • ')}
          </div>
        </div>
        <button 
          className={`px-8 py-3 rounded-lg font-medium transition-colors ${
            totalCount > 0 
              ? 'bg-orange-500 text-white hover:bg-orange-600' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={totalCount === 0}
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SelectionSummary;