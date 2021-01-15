import React from 'react'
import Ingredients from './Ingredients'

function Modal({showModal, setShowModal, ingredients, label}) {

  return (
    <>
    {showModal ? (
    <div className="modalWrapper">
      <Ingredients ingredients={ingredients} label={label}/>
      <button onClick={() => {setShowModal(!showModal)}}>Close</button>
    </div>
    ) : null}
    </>
  )
}

export default Modal
