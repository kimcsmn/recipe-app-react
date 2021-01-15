import React from 'react'

function Nutrients({nutrients, dietLabels, healthLabels}) {
  const fat = nutrients.FAT;
  const protein = nutrients.PROCNT;
  const carbs = nutrients.CHOCDF;

  return (
    <div>
        <p>{dietLabels}</p>
        <p>{healthLabels}</p>
        <li>{`${fat.label}: ${Math.floor(fat.quantity)} ${fat.unit}`}</li>
        <li>{`${protein.label}: ${Math.floor(protein.quantity)} ${protein.unit}`}</li>
        <li>{`${carbs.label}: ${Math.floor(carbs.quantity)} ${carbs.unit}`}</li>

    </div>
  )
}

export default Nutrients
