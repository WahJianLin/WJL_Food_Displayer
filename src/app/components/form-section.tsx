"use client";
import React from "react";

function FormSection(props: IFormSectionProps) {
  return (
    <div>
      <h1>Form Section</h1>
      <button onClick={props.fetchRecipe}>Submit</button>
    </div>
  );
}

interface IFormSectionProps {
  fetchRecipe: () => Promise<void>;
}

export default FormSection;
