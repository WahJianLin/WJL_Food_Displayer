import { IRecipe, IRecipeData } from "@/app/supplimentary/recipe-interfaces";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const fetchRecipe = async (): Promise<IRecipe | null> => {
    const endpoint: URL = new URL(req.url.toLocaleLowerCase());
    const apiKey: string = process.env.SPOONACULAR_API_KEY as string;
    console.log(
      "stuff",
      endpoint,
      `https://api.spoonacular.com/recipes/random${endpoint.search}`
    );

    try {
      const recipeData: IRecipeData = await (
        await fetch(
          `https://api.spoonacular.com/recipes/random${endpoint.search}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              method: "GET",
              "x-api-key": apiKey,
            },
          }
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
