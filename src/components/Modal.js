import React from 'react'
import Ingredients from './Ingredients'
import Nutrients from './Nutrients'

function Modal({showModal, setShowModal, ingredients, label, nutrients, dietLabels, healthLabels}) {

  return (
    <>

    {showModal ? (
    <div className="modalWrapper">
      <Ingredients ingredients={ingredients} label={label}/>
      <Nutrients nutrients={nutrients}/>

      <button onClick={() => {setShowModal(!showModal)}}>Close</button>
    </div>
    ) : null}
    </>
  )
}

export default Modal
