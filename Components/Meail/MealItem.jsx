import React from 'react'
import {Link} from "react-router-dom"
import"./Meail.css"

const MealItem = (props) => {
  const  {idMeal , strMeal , strMealThumb} = props
  
  return (
    <div className='MealItem'>
      <img src={strMealThumb} alt="" />
     <Link to={"/recepe/" + idMeal }> Wotch reacepe</Link>
    </div>
  )
}

export default MealItem


