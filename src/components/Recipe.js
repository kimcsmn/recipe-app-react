import React, {useState} from 'react';
import Modal from './Modal';

function Recipe({ label, image, calories, ingredients, nutrients, dietLabels, healthLabels}){

  const [showModal, setShowModal] = useState(false)

  const openModal = (e) => {
    return setShowModal(!showModal)
  }

  return(
    <div className="recipe">
      <div className="recipe-info">
        <h2>{label}</h2>
        <button className="modalBtn" onClick={openModal}>Show More</button>
        <Modal showModal={showModal} setShowModal={setShowModal} ingredients={ingredients} label={label} nutrients={nutrients}></Modal>
      </div>
      <div className="image-container">
        <img src={image} alt={label} />
      </div>
    </div>
  )
}

export default Recipe
