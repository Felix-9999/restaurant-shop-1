import React from 'react'
import"./Buy.css"

const BasketItem = ({id,cuantity,removeFromBasket,incriment,deacriment}) => {
  // removeFromBasket={removeFromBasket}
  return (
    <div className='BasketItem'>
     <button onClick={()=>incriment(id)}>+</button>
     <span>{cuantity}</span>
     <button onClick={()=>deacriment(id)}>-</button>
    
     <button onClick={()=>removeFromBasket(id)}>delete</button>
     
    </div>
  )
}

export default BasketItem