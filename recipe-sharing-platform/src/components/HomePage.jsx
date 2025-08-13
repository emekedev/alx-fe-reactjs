import React, { useState, useEffect } from "react";
import recipesJson from "../data.json"; 

export default function Homepage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesJson);
  }, []);

  return (
    <div className="p-6">
      <h1  className="text-2xl font-bold mb-4">Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.name}</strong> - Ingredients:{" "}
            {recipe.ingredients.join(", ")}
          </li>
        ))}
      </ul>
       <button
        className="text-white bg-blue-500 hover:bg-blue-600 rounded shadow px-4 py-2"
      >
        View Recipes
      </button>
    </div>
  );
}
