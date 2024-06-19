import { ANIMAL_PRODUCT_USAGE_VALUE, MEAL_TIME_VALUE } from "./constants";

export interface IFormDetails {
  readonly animalProductUsage: ANIMAL_PRODUCT_USAGE_VALUE;
  readonly glutenFree: boolean;
  readonly dairyFree: boolean;
  readonly mealTime: MEAL_TIME_VALUE;
  readonly foodType: string;
  readonly excludeFoods: string;
  readonly includeFoods: string;
}
