import { ANIMAL_PRODUCT_USAGE, MEAL_TIME } from "./constants";

export interface IFormDetails {
  readonly animalProductUsage: ANIMAL_PRODUCT_USAGE;
  readonly glutenFree: boolean;
  readonly dairyFree: boolean;
  readonly mealTime: MEAL_TIME;
  readonly foodType: string;
  readonly excludeFoods: string;
  readonly includeFoods: string;
}