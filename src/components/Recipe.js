import React from 'react'

function Recipe({ label, image, calories, ingredients}){
  return(
    <div className="recipe">
      <div className="recipe-info">
        <h2>{label}</h2>
        <p>Calories: {Math.round(calories)}</p>
        <ul>
          {ingredients.map(i => {
            return(
              <li>{i.text}</li>
            )
          })}
        </ul>
      </div>
      <div className="image-container">
        <img src={image} alt={label} />
      </div>
    </div>
  )
}

export default Recipe
