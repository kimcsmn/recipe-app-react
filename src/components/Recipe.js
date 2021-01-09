import React, {useState} from 'react'
import Modal from 'react-modal'



function Recipe({ label, image, calories, ingredients}){

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const modalStyle = {
    overlay: {
      backgroundColor: "#171717",
      width: "50vw",
      margin: "3em auto",
      padding: "2em",
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
      border: "5px solid #f4bc2b",
      borderRadius: "1em"
    },
    content: {
      color: "#fef7d7",
    },
  }
  const btnClose = {
    textAlign: "center",
    paddding: "1em",

  }

  const ingredientsList = {
    listStyleType: "none",
    margin: "2em"
  }

  const ingredientsTitle = {
    textAlign: "center"
  }

  return(


    <div className="recipe">
      <div className="recipe-info">
        <h2>{label}</h2>
        <p>Calories: {Math.round(calories)}</p>
        <button className="btn" onClick={() => setModalIsOpen(true)}>Recipe</button>

        {/* MODAL  */}
        <div className="modal-container">
        <Modal className="modal" style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
          <div>
            <h2 style={ingredientsTitle}>{label} Recipe</h2>
              <ol style={ingredientsList}>
            {ingredients.map((i, index) => {
              return(
                <li key={index}>{i.text}</li>
              )
            })}
          </ol>
            <button style={btnClose} onClick={() => setModalIsOpen(false)}>Close</button>
          </div>

        </Modal>
        </div>

      </div>
      <div className="image-container">
        <img src={image} alt={label} />
      </div>
    </div>
  )
}

export default Recipe
