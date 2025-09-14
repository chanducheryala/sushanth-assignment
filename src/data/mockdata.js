export const mockDishes = [
    {
      categoryId: 1,
      mealType: "MAIN COURSE",
      type: "VEG",
      description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      category: {
        id: 1,
        name: "North Indian",
        image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
        isRecommendedForMealSuggestion: true
      },
      dishType: "CURRY",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 1,
      name: "Kadhai Paneer"
    },
    {
      categoryId: 1,
      mealType: "MAIN COURSE",
      type: "NON_VEG",
      description: "Tender chicken pieces marinated in yogurt and spices, grilled to perfection.",
      image: null,
      category: {
        id: 1,
        name: "North Indian",
        image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
        isRecommendedForMealSuggestion: true
      },
      dishType: "CURRY",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 2,
      name: "Chicken Tikka Masala"
    },
    {
      categoryId: 2,
      mealType: "STARTER",
      type: "VEG",
      description: "Crispy potato patties served with chutneys.",
      image: null,
      category: {
        id: 2,
        name: "Indian Snacks",
        image: null,
        isRecommendedForMealSuggestion: false
      },
      dishType: "SNACK",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 3,
      name: "Aloo Tikki"
    },
    {
      categoryId: 2,
      mealType: "STARTER",
      type: "NON_VEG",
      description: "Spicy chicken wings marinated in tangy sauce.",
      image: null,
      category: {
        id: 2,
        name: "Indian Snacks",
        image: null,
        isRecommendedForMealSuggestion: false
      },
      dishType: "SNACK",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 4,
      name: "Chicken Wings"
    },
    {
      categoryId: 3,
      mealType: "DESSERT",
      type: "VEG",
      description: "Traditional Indian sweet made with milk and sugar.",
      image: null,
      category: {
        id: 3,
        name: "Indian Sweets",
        image: null,
        isRecommendedForMealSuggestion: false
      },
      dishType: "SWEET",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 5,
      name: "Gulab Jamun"
    },
    {
      categoryId: 4,
      mealType: "SIDES",
      type: "VEG",
      description: "Fluffy basmati rice cooked with aromatic spices.",
      image: null,
      category: {
        id: 4,
        name: "Rice & Bread",
        image: null,
        isRecommendedForMealSuggestion: false
      },
      dishType: "RICE",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 6,
      name: "Jeera Rice"
    },
    {
      categoryId: 1,
      mealType: "MAIN COURSE",
      type: "VEG",
      description: "Mixed vegetables cooked in rich tomato and cashew gravy.",
      image: null,
      category: {
        id: 1,
        name: "North Indian",
        image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
        isRecommendedForMealSuggestion: true
      },
      dishType: "CURRY",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 7,
      name: "Mixed Vegetable Curry"
    },
    {
      categoryId: 1,
      mealType: "MAIN COURSE",
      type: "NON_VEG",
      description: "Succulent mutton pieces cooked in aromatic spices.",
      image: null,
      category: {
        id: 1,
        name: "North Indian",
        image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
        isRecommendedForMealSuggestion: true
      },
      dishType: "CURRY",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 8,
      name: "Mutton Curry"
    },
    {
      categoryId: 3,
      mealType: "DESSERT",
      type: "VEG",
      description: "Creamy rice pudding flavored with cardamom and nuts.",
      image: null,
      category: {
        id: 3,
        name: "Indian Sweets",
        image: null,
        isRecommendedForMealSuggestion: false
      },
      dishType: "SWEET",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 9,
      name: "Kheer"
    },
    {
      categoryId: 4,
      mealType: "SIDES",
      type: "VEG",
      description: "Soft and fluffy Indian bread baked in tandoor.",
      image: null,
      category: {
        id: 4,
        name: "Rice & Bread",
        image: null,
        isRecommendedForMealSuggestion: false
      },
      dishType: "BREAD",
      forChefit: true,
      forParty: true,
      nameHi: "",
      nameBn: "",
      id: 10,
      name: "Naan"
    }
  ];
  
  // Mock ingredients data
  export const mockIngredients = {
    1: [
      { name: "Paneer", quantity: "250g" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomatoes", quantity: "2 medium" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1/2 tsp" },
      { name: "Oil", quantity: "2 tbsp" }
    ],
    2: [
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Tomato Puree", quantity: "1 cup" },
      { name: "Onions", quantity: "2 large" },
      { name: "Cream", quantity: "1/4 cup" },
      { name: "Tikka Masala Spice", quantity: "2 tbsp" }
    ],
    3: [
      { name: "Potatoes", quantity: "4 large" },
      { name: "Green Peas", quantity: "1/2 cup" },
      { name: "Breadcrumbs", quantity: "1/2 cup" },
      { name: "Mint Chutney", quantity: "As needed" },
      { name: "Tamarind Chutney", quantity: "As needed" }
    ],
    4: [
      { name: "Chicken Wings", quantity: "500g" },
      { name: "Hot Sauce", quantity: "3 tbsp" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Honey", quantity: "1 tbsp" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Ginger", quantity: "1 inch piece" }
    ],
    5: [
      { name: "Milk Powder", quantity: "1 cup" },
      { name: "All Purpose Flour", quantity: "2 tbsp" },
      { name: "Sugar", quantity: "1 cup" },
      { name: "Cardamom Powder", quantity: "1/2 tsp" },
      { name: "Rose Water", quantity: "1 tsp" },
      { name: "Oil for frying", quantity: "As needed" }
    ],
    6: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Bay Leaves", quantity: "2" },
      { name: "Salt", quantity: "To taste" },
      { name: "Ghee", quantity: "2 tbsp" },
      { name: "Water", quantity: "4 cups" }
    ],
    7: [
      { name: "Mixed Vegetables", quantity: "500g" },
      { name: "Onions", quantity: "2 medium" },
      { name: "Tomatoes", quantity: "3 medium" },
      { name: "Cashews", quantity: "1/4 cup" },
      { name: "Cream", quantity: "1/4 cup" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" }
    ],
    8: [
      { name: "Mutton", quantity: "750g" },
      { name: "Onions", quantity: "3 large" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Red Chili Powder", quantity: "2 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Oil", quantity: "3 tbsp" }
    ],
    9: [
      { name: "Full Fat Milk", quantity: "1 liter" },
      { name: "Basmati Rice", quantity: "1/4 cup" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Cardamom Powder", quantity: "1/2 tsp" },
      { name: "Almonds", quantity: "10 pieces" },
      { name: "Pistachios", quantity: "10 pieces" },
      { name: "Saffron", quantity: "Few strands" }
    ],
    10: [
      { name: "All Purpose Flour", quantity: "2 cups" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Baking Powder", quantity: "1/2 tsp" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Sugar", quantity: "1 tsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Warm Water", quantity: "As needed" }
    ]
  };
  
  export const mealTypes = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];