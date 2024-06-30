import React from "react";
import {
  FOOD_DISPLAYER_LABEL,
  HERO_DESCRIPTION,
} from "../supplimentary/constants";

function InitialHero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{FOOD_DISPLAYER_LABEL}</h1>
          <p className="py-6">{HERO_DESCRIPTION}</p>
        </div>
      </div>
    </div>
  );
}

export default InitialHero;
