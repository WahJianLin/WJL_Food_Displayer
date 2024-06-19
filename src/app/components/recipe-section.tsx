"use client";
import React from "react";
import {
  IExtendedIngredient,
  IRecipe,
} from "../supplimentary/recipe-interfaces";
import DOMPurify from "isomorphic-dompurify";

function RecipeSection(props: Props) {
  const displayIngerdient = (ingredient: IExtendedIngredient): string => {
    const usMeaure: string = `${ingredient.measures.us.amount} ${ingredient.measures.us.unitShort}`;
    const metricMeasure: string = `${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`;
    const isSameMeasure: boolean = usMeaure === metricMeasure;
    return isSameMeasure
      ? ingredient.original
      : `${usMeaure} (${metricMeasure}) ${ingredient.originalName}`;
  };
  const sanatizedRecipe = DOMPurify.sanitize(props.recipe.summary);

  return (
    <div>
      <h1>{props.recipe.title}</h1>
      <br></br>
      <div dangerouslySetInnerHTML={{ __html: sanatizedRecipe }} />
      <br></br>
      <h3>Ingredients</h3>
      <br></br>
      <ul>
        {props.recipe.extendedIngredients.map((ingredient) => (
          <li>{displayIngerdient(ingredient)}</li>
        ))}
      </ul>
      <br></br>
      <ul>
        {props.recipe.analyzedInstructions[0].steps.map((step, index) => (
          <li>{`Step ${index + 1}: ${step.step}`}</li>
        ))}
      </ul>
      <br></br>
      <h6>Created by: {props.recipe.creditsText}</h6>
    </div>
  );
}

interface Props {
  readonly recipe: IRecipe;
}

export default RecipeSection;
