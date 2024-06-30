//Labels
export const FOOD_DISPLAYER_LABEL: string = "Food Displayer";
export const ANIMAL_USAGE_LABEL: string = "Animal Product Usage";
export const GLUTEN_FREE_LABEL: string = "Gluten Free";
export const DAIRY_FREE_LABEL: string = "Dairy Free";
export const MEAL_TIME_LABEL: string = "Meal Time";
export const FOOD_TYPE_LABEL: string = "Food Type";
export const INCLUDE_FOODS_LABEL: string = "Include List";
export const EXCLUDE_FOODS_LABEL: string = "Exclude List";
export const FIND_RANDOM_RECIPE_LABEL: string = "Find Random Recipe";
export const OPEN_FORM_LABEL: string = "Open Food Form";
export const INGREDIENTS_LABEL: string = "Ingredients";
export const INSTRUCTIONS_LABEL: string = "Instructions";

//Values
export const GLUTEN_FREE_VALUE: string = "gluten free";
export const DAIRY_FREE_VALUE: string = "dairy free";

//Descriptions
export const FORM_DESCRIPTION: string =
  "Fill out below to find a random recipe";
export const FOOD_TYPE_DESCRIPTION: string = "Leave blank for all";
export const INCLUDE_EXCLUDE_DESCRIPTION: string =
  "Enter comma separated food names";
export const COMMA_SEPERATED_DESCRIPTION = "Use comma seperated list";
export const HERO_DESCRIPTION =
  "This is a food displayer app that allows you to search for random recipes based on the selected options on the form. This is using Spoonacular free tier API. This project is a work in progress.";
export const FOOTER_DESCRIPTION = "Powered by Spoonacular free tier API";

//Place Holders
export const FOOD_TYPE_PLACE_HOLDER = "Pasta, Sandwich, etc.";
export const INCLUDE_FOODS_PLACE_HOLDER =
  "Ingredients/Foods to include in the recipe";
export const EXCLUDE_FOODS_PLACE_HOLDER =
  "Ingredients/Foods to exclude in the recipe";

//Error Messages
export const ERROR_MESSAGE_TEXT_FIELDS: string =
  "Form has errors. Check text fields.";
export const ERROR_MESSAGE_OVERLAP: string =
  "Include and exclude cannot overlap. Please resubmit form without overlap.";

//Enums and Records
export enum FIELD_IDS {
  ANIMAL_PRODUCT_USAGE = "animalProductUsage",
  INCLUDE_FOODS = "includeFoods",
  EXCLUDE_FOODS = "excludeFoods",
  FOOD_TYPE = "foodType",
  MEAL_TIME = "mealTime",
  GLUTEN_FREE = "glutenFree",
  DAIRY_FREE = "dairyFree",
}

export enum ANIMAL_PRODUCT_USAGE_NAME {
  STANDARD = "Standard",
  VEGETARIAN = "Vegetarian",
  VEGAN = "Vegan",
}
export enum ANIMAL_PRODUCT_USAGE_VALUE {
  STANDARD = "standard",
  VEGETARIAN = "vegetarian",
  VEGAN = "vegan",
}

export const ANIMAL_PRODUCT_USAGE_RECORDS: {
  [key in ANIMAL_PRODUCT_USAGE_NAME]: ANIMAL_PRODUCT_USAGE_VALUE;
} = {
  [ANIMAL_PRODUCT_USAGE_NAME.STANDARD]: ANIMAL_PRODUCT_USAGE_VALUE.STANDARD,
  [ANIMAL_PRODUCT_USAGE_NAME.VEGETARIAN]: ANIMAL_PRODUCT_USAGE_VALUE.VEGETARIAN,
  [ANIMAL_PRODUCT_USAGE_NAME.VEGAN]: ANIMAL_PRODUCT_USAGE_VALUE.VEGAN,
};

export enum MEAL_TIME_NAME {
  ALL = "All",
  BREAKFAST = "Breakfast",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
  DESSERT = "Dessert",
}

export enum MEAL_TIME_VALUE {
  ALL = "all",
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  DINNER = "dinner",
  SNACK = "snack",
  DESSERT = "dessert",
}

export const MEAL_TIME_RECORDS: {
  [key in MEAL_TIME_NAME]: MEAL_TIME_VALUE;
} = {
  [MEAL_TIME_NAME.ALL]: MEAL_TIME_VALUE.ALL,
  [MEAL_TIME_NAME.BREAKFAST]: MEAL_TIME_VALUE.BREAKFAST,
  [MEAL_TIME_NAME.LUNCH]: MEAL_TIME_VALUE.LUNCH,
  [MEAL_TIME_NAME.DINNER]: MEAL_TIME_VALUE.DINNER,
  [MEAL_TIME_NAME.SNACK]: MEAL_TIME_VALUE.SNACK,
  [MEAL_TIME_NAME.DESSERT]: MEAL_TIME_VALUE.DESSERT,
};
