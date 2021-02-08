import React from 'react'

function Nutrients({nutrients}) {
  const {CHOCDF: carbs , FAT: fat, FIBTG: fiber, PROCNT: protein, SUGAR: sugar, CHOLE: cholesterol} = nutrients;
  return (

    <div className="nutrients">
       <h1>Nutrition Facts</h1>
       <ul key={Math.random() * 100}>
          <li>{`${fat.label}: ${Math.floor(fat.quantity)} ${fat.unit}`}</li>
          <li>{`${protein.label}: ${Math.floor(protein.quantity)} ${protein.unit}`}</li>
          <li>{`${carbs.label}: ${Math.floor(carbs.quantity)} ${carbs.unit}`}</li>
          <li>{`${fiber.label}: ${Math.floor(fiber.quantity)} ${fiber.unit}`}</li>
          <li>{`${sugar.label}: ${Math.floor(sugar.quantity)} ${sugar.unit}`}</li>
          <li>{`${cholesterol.label}: ${Math.floor(cholesterol.quantity)} ${cholesterol.unit}`}</li>
        </ul>
    </div>
  )
}

export default Nutrients
