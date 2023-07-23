import "./App.css";
import Recipes from "./components/recipes";
import {useEffect, useState } from "react";


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let mounted = true;
    // read books from the api endpoint
    setRecipes([]);

    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>DINNER TIME!</h1>

      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
