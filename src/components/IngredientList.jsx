import React from 'react';

const IngredientList = ({ ingredients }) => {
  if (ingredients.length === 0) {
    return (
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-4">Ingredients Required</h4>
        <p className="text-gray-500">No ingredient information available.</p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold mb-4">Ingredients Required</h4>
      <div className="space-y-3">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
            <span className="font-medium">{ingredient.name}</span>
            <span className="text-gray-600 font-semibold">{ingredient.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;