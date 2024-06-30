"use client";
import React from "react";
import {
  IExtendedIngredient,
  IRecipe,
} from "../supplimentary/recipe-interfaces";
import DOMPurify from "isomorphic-dompurify";
import {
  FOOTER_DESCRIPTION,
  INGREDIENTS_LABEL,
  INSTRUCTIONS_LABEL,
} from "../supplimentary/constants";

function RecipeSection(props: IRecipeSectionProps) {
  const displayIngredient = (ingredient: IExtendedIngredient): string => {
    const usMeaure: string = `${ingredient.measures.us.amount} ${ingredient.measures.us.unitShort}`;
    const metricMeasure: string = `${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort}`;
    const isSameMeasure: boolean = usMeaure === metricMeasure;
    return isSameMeasure
      ? ingredient.original
      : `${usMeaure} (${metricMeasure}) ${ingredient.originalName}`;
  };

  const getIngredientList = (): JSX.Element | null => {
    return props.recipe && !!props.recipe.extendedIngredients ? (
      <div>
        <h3 className="text-2xl pb-2">{INGREDIENTS_LABEL}</h3>
        <ul>
          {props.recipe.extendedIngredients.map((ingredient) => (
            <li>{displayIngredient(ingredient)}</li>
          ))}
        </ul>
      </div>
    ) : null;
  };

  const getInstructionList = (): JSX.Element | null => {
    return props.recipe && !!props.recipe.analyzedInstructions ? (
      <div>
        <h3 className="text-2xl pb-2">{INSTRUCTIONS_LABEL}</h3>
        <ul>
          {props.recipe.analyzedInstructions[0].steps.map((step, index) => (
            <li>{`Step ${index + 1}: ${step.step}`}</li>
          ))}
        </ul>
      </div>
    ) : null;
  };

  const sanatizedRecipe = DOMPurify.sanitize(props.recipe.summary);

  return (
    <div className="p-10 flex flex-col justify-between h-full">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-4xl">{props.recipe.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: sanatizedRecipe }} />
        {getIngredientList()}
        {getInstructionList()}
      </div>
      <div>
        <h6>{`${FOOTER_DESCRIPTION} ${props.recipe.creditsText}`}</h6>
      </div>
    </div>
  );
}

interface IRecipeSectionProps {
  readonly recipe: IRecipe;
}

export default RecipeSection;
