import React from 'react';
import { Plus, Eye } from 'lucide-react';

const DishCard = ({ dish, isSelected, onAdd, onRemove, onShowIngredients, getDishImage }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={getDishImage(dish)} 
          alt={dish.name}
          className="w-full h-48 object-cover bg-gray-100"
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/300x200?text=No+Image';
          }}
        />
        <div
          className={`absolute top-2 left-2 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium shadow-sm border ${dish.type === 'VEG' ? 'bg-white/90 text-green-700 border-green-600' : 'bg-white/90 text-red-700 border-red-600'}`}
        >
          <span
            className={`inline-flex items-center justify-center w-3.5 h-3.5 rounded-[2px] border ${dish.type === 'VEG' ? 'border-green-600' : 'border-red-600'}`}
          >
            <span className={`${dish.type === 'VEG' ? 'bg-green-600' : 'bg-red-600'} w-2 h-2 rounded-full`} />
          </span>
          {dish.type === 'VEG' ? 'Veg' : 'Non-Veg'}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg leading-snug line-clamp-2">{dish.name}</h3>
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