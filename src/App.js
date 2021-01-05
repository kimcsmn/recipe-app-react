import React, {useEffect, useState} from 'react'
import Recipe from './components/Recipe';


function App() {

  const APP_KEY = "8a8f88177c98615233f03555bca75607";
  const APP_ID = "bc7f7b0b";

  // state hooks
  const [recipes, setRecipes] = useState([]);

  // state of search input
  const [keyword , setKeyword] = useState("");

  // state of final input
  const [query, setQuery] = useState("chicken");


  // execute getRecipe whenever query is updated
  useEffect(() => {
    getRecipe();
  }, []);

  // fetch the data from api
  const getRecipe = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
  }


  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(keyword);
    console.log({keyword, query});
    setKeyword("");
  }

    return(
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={keyword} onChange={handleChange}/>
          <button type="submit" >Search</button>
        </form>

      {/* loop through recipes and each recipe will instantiate a Recipe component with props */}
      <div className="Recipe">
        {
         recipes.map(r => {
           return(
            <Recipe
             key={r.recipe.label}
             label={r.recipe.label}
             image={r.recipe.image}
             calories={r.recipe.calories}
           />
           )
         })
       }
      </div>

      </div>
    )
}

export default App

// create component for search ui
// create componet for recipe
// fetch data once to display recipe
  // use useEffect to fetch data once and fetch again when the query changed
// add a functionality that will display the recipe of the name in the query
