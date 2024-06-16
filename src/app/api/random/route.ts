import { IRecipe, IRecipeData } from "@/app/supplimentary/recipe-interfaces";
import { NextResponse } from "next/server";

export async function GET() {
  const fetchRecipe = async (): Promise<IRecipe | null> => {
    try {
      const recipeData: IRecipeData = await (
        await fetch(
          "https://api.spoonacular.com/recipes/random?apiKey="
        )
      ).json();
      const recipe: IRecipe = recipeData?.recipes[0];
      return recipe;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  return NextResponse.json(await fetchRecipe());
}
