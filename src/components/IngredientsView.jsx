import React from 'react';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import IngredientList from './IngredientList';

const IngredientsView = ({
  dish,
  ingredients = [],
  isSelected = false,
  onBack,
  onAddDish,
  onRemoveDish,
  getDishImage,
}) => {
  if (!dish) return null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">

        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold">Ingredient Details</h2>
        </div>


        <div className="p-6">
          <img
            src={getDishImage(dish)}
            alt={dish.name}
            className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-100"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/400x200?text=No+Image';
            }}
          />

          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-bold">{dish.name}</h3>
            <div
              className={`w-4 h-4 rounded-full ${
                dish.type === 'VEG' ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></div>
          </div>

          <p className="text-gray-600 mb-4">{dish.description}</p>

          <div className="text-sm text-gray-500 mb-6">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              {dish.category.name}
            </span>
          </div>


          <IngredientList ingredients={ingredients} />

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Back to Menu
            </button>
            {!isSelected ? (
              <button
                onClick={() => {
                  onAddDish(dish);
                  onBack && onBack();
                }}
                className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add to Menu
              </button>
            ) : (
              <button
                onClick={() => {
                  onRemoveDish(dish.id);
                  onBack && onBack();
                }}
                className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium flex items-center justify-center gap-2"
              >
                <Minus className="w-4 h-4" />
                Remove from Menu
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsView;
