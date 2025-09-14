import React from 'react';
import SearchBar from './SearchBar';
import VegFilter from './VegFilter';
import MealTypeTabs from './MealTypeTab';
import DishList from './DishList';
import SelectionSummary from './SelectionSummary';

const MenuView = ({
  searchTerm,
  onSearchChange,
  vegFilter,
  nonVegFilter,
  onVegChange,
  onNonVegChange,
  mealTypes,
  selectedMealType,
  onMealTypeChange,
  getSelectedCountByMealType,
  filteredDishes,
  selectedDishes,
  onAddDish,
  onRemoveDish,
  onShowIngredients,
  getDishImage,
  getTotalSelectedCount,
  onContinue
}) => {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Party Menu Selection</h1>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          placeholder="Search dishes..."
        />

        <VegFilter 
          vegFilter={vegFilter}
          nonVegFilter={nonVegFilter}
          onVegChange={onVegChange}
          onNonVegChange={onNonVegChange}
        />

        <MealTypeTabs 
          mealTypes={mealTypes}
          selectedMealType={selectedMealType}
          onMealTypeChange={onMealTypeChange}
          getSelectedCountByMealType={getSelectedCountByMealType}
        />
      </div>

      <DishList 
        dishes={filteredDishes}
        selectedMealType={selectedMealType}
        selectedDishes={selectedDishes}
        onAddDish={onAddDish}
        onRemoveDish={onRemoveDish}
        onShowIngredients={onShowIngredients}
        getDishImage={getDishImage}
      />

      <SelectionSummary 
        totalCount={getTotalSelectedCount()}
        mealTypes={mealTypes}
        getSelectedCountByMealType={getSelectedCountByMealType}
        onContinue={onContinue}
      />
    </div>
  );
};

export default MenuView;