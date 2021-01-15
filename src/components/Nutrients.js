import React from 'react'

function Nutrients({nutrients}) {
  const fat = nutrients.FAT;
  const protein = nutrients.PROCNT;
  const carbs = nutrients.CHOCDF;
  const energy = nutrients.ENERC_KCAL;

  return (
    <div className="nutrients">
        <li>{`${fat.label}: ${Math.floor(fat.quantity)} ${fat.unit}`}</li>
        <li>{`${protein.label}: ${Math.floor(protein.quantity)} ${protein.unit}`}</li>
        <li>{`${carbs.label}: ${Math.floor(carbs.quantity)} ${carbs.unit}`}</li>
        <li>{`${energy.label}: ${Math.floor(energy.quantity)} ${energy.unit}`}</li>
    </div>
  )
}

export default Nutrients
