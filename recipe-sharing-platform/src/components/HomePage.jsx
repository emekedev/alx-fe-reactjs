import React, { useState, useEffect } from "react";
import recipesJson from "../data.json"; 
import {Link} from 'react-router-dom';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesJson);
  }, []);

  return (
    <div className="p-6">

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold">Recipe 1</h2>
          <p>Some description</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold">Recipe 2</h2>
          <p>Some description</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold">Recipe 3</h2>
          <p>Some description</p>
        </div>
      </div>
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
