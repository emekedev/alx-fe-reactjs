import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data.json"; // adjust path if needed

export default function RecipeDetail() {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Convert ID to number because params are strings
    const recipeId = parseInt(id, 10);
    const foundRecipe = recipesData.find((r) => r.id === recipeId);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="p-6">Recipe not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded shadow mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
