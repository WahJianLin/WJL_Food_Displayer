// Interface for Measures
export interface IMeasures {
  us: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
  metric: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
}

// Interface for Extended Ingredients
export interface IExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: IMeasures;
}

// Interface for Steps in Analyzed Instructions
export interface IStep {
  number: number;
  step: string;
  ingredients: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }[];
  equipment: {
    id: number;
    name: string;
    localizedName: string;
    image: string;
    temperature?: {
      number: number;
      unit: string;
    };
  }[];
  length?: {
    number: number;
    unit: string;
  };
}

// Interface for Analyzed Instructions
export interface IAnalyzedInstruction {
  name: string;
  steps: IStep[];
}

// Interface for Recipe
export interface IRecipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: IExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: IAnalyzedInstruction[];
  originalId: number | null;
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export interface IRecipeData {
  recipes: IRecipe[];
}

// Interface for the main JSON structure
