import React from 'react'

const Ingredients = ({ingredients}) => {
  return(
    <div className="ingredients">
      <h1>Ingredients</h1>
       <ul className="modal">
          {ingredients.map(i => {
            return(
              <li>{i.text}</li>
            )
          })}
      </ul>
    </div>
  )
}

export default Ingredients
