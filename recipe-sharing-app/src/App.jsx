import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

function App() {

  return (
    <div>
      <AddRecipeForm />
      <RecipeList />
    </div>
    
    
  )
}

export default App
