import React from 'react'
import"./Category.css"
import CategoryItem from './CategoryItem'


const CategoryList = ({category}) => {
  return (
    <div className='categoryList'>
      <div className='global-text'>
        <h1 className='vernagir'>Welocom</h1>
        <p className='vernagir'>Welcome to our restaurant marketplace.</p>
      </div>
      
      {
         category.map((el,index)=>{
          
          return <CategoryItem key={index} item={el}/>
         })
      }
    </div>
  )
}

export default CategoryList



