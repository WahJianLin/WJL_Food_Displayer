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

export const MEAL_TIME_RECORDS:{
  [key in MEAL_TIME_NAME]: MEAL_TIME_VALUE
} = {
  [MEAL_TIME_NAME.ALL]: MEAL_TIME_VALUE.ALL,
  [MEAL_TIME_NAME.BREAKFAST]: MEAL_TIME_VALUE.BREAKFAST,
  [MEAL_TIME_NAME.LUNCH]: MEAL_TIME_VALUE.LUNCH,
  [MEAL_TIME_NAME.DINNER]: MEAL_TIME_VALUE.DINNER,  
  [MEAL_TIME_NAME.SNACK]: MEAL_TIME_VALUE.SNACK,
  [MEAL_TIME_NAME.DESSERT]: MEAL_TIME_VALUE.DESSERT,
}

export const FORM_TITLE: string = "WJL Food Displayer";
export const FORM_DESCRIPTION: string =
  "Fill out below to find a random recipe";
export const ANIMAL_USAGE_LABEL: string = "Animal Product Usage";
export const GLUTEN_FREE_LABEL: string = "Gluten Free";
export const DAIRY_FREE_LABEL: string = "Dairy Free";
export const MEAL_TIME_LABEL: string = "Meal Time";
export const FOOD_TYPE_LABEL: string = "Food Type";
export const FOOD_TYPE_DESCRIPTION_LABEL: string = "Leave blank for all";
export const INCLUDE_FOODS_LABEL: string = "Foods to Include";
export const EXCLUDE_FOODS_LABEL: string = "Foods to Exclude";
export const INCLUDE_EXCLUDE_DESCRIPTION_LABEL: string =
  "Enter comma separated food names";
export const FIND_RANDOM_RECIPE_LABEL: string = "Find Random Recipe";

export const OPEN_FORM_LABEL: string = "Open Form";

export const GLUTEN_FREE_VALUE: string = "gluten free";
export const DAIRY_FREE_VALUE: string = "dairy free";

export const OVERLAP_MESSAGE: string = "Include and exclude cannot overlap";
