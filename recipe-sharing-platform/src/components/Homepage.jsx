import React, { useState, useEffect } from "react";
import recipesJson from "../data.json"; 

export default function Homepage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesJson);
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong> - Ingredients:{" "}
            {recipe.ingredients.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
