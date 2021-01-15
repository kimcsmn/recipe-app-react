import React from 'react'
import Ingredients from './Ingredients'
import Nutrients from './Nutrients'

function Modal({showModal, setShowModal, ingredients, label, nutrients, dietLabels, healthLabels}) {

  return (
    <>
    {showModal ? (
    <div className="modalWrapper">
      <h3 className="modalTitle">{label} Recipe</h3>
      <div className="modalContent">
        <Ingredients ingredients={ingredients} label={label}/>
        <Nutrients nutrients={nutrients}/>
      </div>
      <button onClick={() => {setShowModal(!showModal)}}>Close</button>
    </div>
    ) : null}
    </>
  )
}

export default Modal
