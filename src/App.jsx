import React, { useState } from 'react';
import MenuView from './components/MenuView';
import IngredientsView from './components/IngredientsView';
import { mockDishes, mockIngredients, mealTypes } from './data/mockdata';

const App = () => {
  const [currentView, setCurrentView] = useState('menu'); // 'menu' or 'ingredients'
  const [selectedMealType, setSelectedMealType] = useState('MAIN COURSE');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [vegFilter, setVegFilter] = useState(true);
  const [nonVegFilter, setNonVegFilter] = useState(true);
  const [selectedDishForIngredients, setSelectedDishForIngredients] = useState(null);

  // Filter dishes based on selected meal type, search term, and veg/non-veg filters
  const filteredDishes = mockDishes.filter(dish => {
    const matchesMealType = dish.mealType === selectedMealType;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVegFilter = (vegFilter && dish.type === 'VEG') || (nonVegFilter && dish.type === 'NON_VEG');
    
    return matchesMealType && matchesSearch && matchesVegFilter;
  });

  // Get count of selected dishes by meal type
  const getSelectedCountByMealType = (mealType) => {
    return selectedDishes.filter(dish => dish.mealType === mealType).length;
  };

  // Get total selected dishes count
  const getTotalSelectedCount = () => {
    return selectedDishes.length;
  };

  // Add dish to selected list
  const addDish = (dish) => {
    if (!selectedDishes.find(d => d.id === dish.id)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  // Remove dish from selected list
  const removeDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter(d => d.id !== dishId));
  };

  // Check if dish is selected
  const isDishSelected = (dishId) => {
    return selectedDishes.some(d => d.id === dishId);
  };

  // Show ingredients for a dish
  const showIngredients = (dish) => {
    setSelectedDishForIngredients(dish);
    setCurrentView('ingredients');
  };

  // Get dish image or fallback
  const getDishImage = (dish) => {
    return (
      dish.image ||
      dish.category?.image ||
      'https://placehold.co/300x200?text=No+Image'
    );
  };

  // Handle back to menu from ingredients view
  const handleBackToMenu = () => {
    setCurrentView('menu');
    setSelectedDishForIngredients(null);
  };

  // Handle continue button click
  const handleContinue = () => {
    console.log('Continue clicked with selected dishes:', selectedDishes);
    // Add navigation logic here if needed
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'menu' && (
        <MenuView
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegFilter={vegFilter}
          nonVegFilter={nonVegFilter}
          onVegChange={setVegFilter}
          onNonVegChange={setNonVegFilter}
          mealTypes={mealTypes}
          selectedMealType={selectedMealType}
          onMealTypeChange={setSelectedMealType}
          getSelectedCountByMealType={getSelectedCountByMealType}
          filteredDishes={filteredDishes}
          selectedDishes={selectedDishes}
          onAddDish={addDish}
          onRemoveDish={removeDish}
          onShowIngredients={showIngredients}
          getDishImage={getDishImage}
          getTotalSelectedCount={getTotalSelectedCount}
          onContinue={handleContinue}
        />
      )}
      
      {currentView === 'ingredients' && (
        <IngredientsView
          dish={selectedDishForIngredients}
          ingredients={mockIngredients[selectedDishForIngredients?.id] || []}
          isSelected={isDishSelected(selectedDishForIngredients?.id)}
          onBack={handleBackToMenu}
          onAddDish={addDish}
          onRemoveDish={removeDish}
          getDishImage={getDishImage}
        />
      )}
    </div>
  );
};

export default App;