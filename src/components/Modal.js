import React from 'react'
import Ingredients from './Ingredients'

function Modal({showModal, setShowModal, ingredients, label}) {

  return (
    <>
    <Ingredients ingredients={ingredients} label={label}/>
    {showModal ? (
    <div className="modalWrapper">
      <ul className="modal">
          <h3>{label} Recipe</h3>
          {ingredients.map(i => {
            return(
              <li>{i.text}</li>
            )
          })}
      </ul>
      <button onClick={() => {setShowModal(!showModal)}}>Close</button>
    </div>
    ) : null}
    </>
  )
}

export default Modal
