import React from 'react'
import"./Buy.css"


const GoodItem = ({ name,sas,id, newBasketShow}) => {
  console.log(newBasketShow); 
  return (
    <div className='goodItem'>
      
          <button className='btn' onClick={()=>newBasketShow({
          })}>buy</button>
    </div>
  )
}

export default GoodItem 