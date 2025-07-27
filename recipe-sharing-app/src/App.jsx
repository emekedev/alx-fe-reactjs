import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {

  return (
    <div>
      <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </Router>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationList />
    </div>
    
    
  )
}

export default App
