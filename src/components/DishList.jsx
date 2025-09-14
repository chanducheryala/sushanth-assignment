import React from 'react';
import DishCard from './DishCard';

const DishList = ({ 
  dishes, 
  selectedMealType, 
  selectedDishes, 
  onAddDish, 
  onRemoveDish, 
  onShowIngredients,
  getDishImage 
}) => {
  const isDishSelected = (dishId) => {
    return selectedDishes.some(d => d.id === dishId);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {selectedMealType} - {dishes.length} dishes found
      </h2>
      
      {dishes.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>No dishes found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map(dish => (
            <DishCard
              key={dish.id}
              dish={dish}
              isSelected={isDishSelected(dish.id)}
              onAdd={onAddDish}
              onRemove={onRemoveDish}
              onShowIngredients={onShowIngredients}
              getDishImage={getDishImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishList;