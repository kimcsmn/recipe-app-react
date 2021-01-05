import React from 'react'

function Recipe({ label, image, calories}){
  return(
    <div>
      <h2>{label}</h2>
      <p>{Math.round(calories)}</p>
      <img src={image} alt={label} />
    </div>
  )
}

export default Recipe
