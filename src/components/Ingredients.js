import React from 'react'

const Ingredients = ({ingredients, label}) => {
  return(
    <div>
       <ul className="modal">
          <h3>{label} Recipe</h3>
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
