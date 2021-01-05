import React from 'react'

function Recipe({ label, image, calories}){
  return(
    <div className="recipe">
      <div className="recipe-info">
        <h2>{label}</h2>
        <p>Calories: {Math.round(calories)}</p>
      </div>
      <img src={image} alt={label} />
    </div>
  )
}

export default Recipe
