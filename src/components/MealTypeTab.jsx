import React from 'react';

const MealTypeTabs = ({ mealTypes, selectedMealType, onMealTypeChange, getSelectedCountByMealType }) => {
  return (
    <div className="flex gap-2 mb-6">
      {mealTypes.map(mealType => {
        const count = getSelectedCountByMealType(mealType);
        return (
          <button
            key={mealType}
            onClick={() => onMealTypeChange(mealType)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedMealType === mealType 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {mealType} {count > 0 && `(${count})`}
          </button>
        );
      })}
    </div>
  );
};

export default MealTypeTabs;