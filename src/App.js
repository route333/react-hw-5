import './App.css';
import RecipeList from './components/RecipeList/RecipeList';
import recipes from './recipes.json'

function App() {
  return (
    <div className="App">
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
