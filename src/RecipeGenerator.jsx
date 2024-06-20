import React, { useState } from 'react';

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=1&apiKey=dd2b8e81127048b999d34b52621b4614`);
      const data = await response.json();
      if (data.length > 0) {
        setRecipes(data);
        setError('');
      } else {
        setError('No recipes found.');
        setRecipes([]);
      }
    } catch (error) {
      setError('Error fetching recipe.');
      console.error('Error fetching recipe:', error);
    }
  };

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleButtonClick = () => {
    if (ingredients) {
      fetchRecipes();
    } else {
      alert('Please enter some ingredients.');
    }
  };

  return (
    <div className="container">
      <h1>Recipe Generator</h1>
      <input
        type="text"
        value={ingredients}
        onChange={handleInputChange}
        placeholder="Enter ingredients (comma separated)"
      />
      <button onClick={handleButtonClick}>Generate Recipe</button>
      <div id="recipe-results">
        {error && <p>{error}</p>}
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <ul>
              {recipe.usedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
              {recipe.missedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeGenerator;
