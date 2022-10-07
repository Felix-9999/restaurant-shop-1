
import React from 'react'
import { Link } from 'react-router-dom'
import"./Category.css"

const CategoryItem = ({item}) => {
 
  return (
   <div className='categoryItem'>
      <img src={item.strCategoryThumb}/>
      <Link  className='totch-categori' to={"/category/" + item.strCategory}> Watch  {item.strCategory}...</Link>
    </div>
  )
}

export default CategoryItem


