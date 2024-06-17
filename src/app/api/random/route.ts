import { IRecipe, IRecipeData } from "@/app/supplimentary/recipe-interfaces";
import { NextResponse } from "next/server";

export async function GET() {
  const fetchRecipe = async (): Promise<IRecipe | null> => {
    try {
      const recipeData: IRecipeData = await (
        await fetch("https://api.spoonacular.com/recipes/random?number=1", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            method: "GET",
            "x-api-key": "",
          },
        })
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
