import React from 'react';
import { Plus, Eye } from 'lucide-react';

const DishCard = ({ dish, isSelected, onAdd, onRemove, onShowIngredients, getDishImage }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={getDishImage(dish)} 
        alt={dish.name}
        className="w-full h-48 object-cover bg-gray-100"
        onError={(e) => {
          e.target.src = '/api/placeholder/300/200';
        }}
      />
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-lg">{dish.name}</h3>
          <div className={`w-3 h-3 rounded-full ${dish.type === 'VEG' ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{dish.description}</p>
        
        <div className="text-xs text-gray-500 mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded">{dish.category.name}</span>
        </div>
        
        <div className="flex gap-2">
          {isSelected ? (
            <button 
              onClick={() => onRemove(dish.id)}
              className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
            >
              Remove
            </button>
          ) : (
            <button 
              onClick={() => onAdd(dish)}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium flex items-center justify-center gap-1"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          )}
          
          <button 
            onClick={() => onShowIngredients(dish)}
            className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium flex items-center gap-1"
          >
            <Eye className="w-4 h-4" />
            Ingredient
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;