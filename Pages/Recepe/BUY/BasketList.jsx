import React from 'react'
import BasketItem from './BasketItem'
import"./Buy.css"

const BasketList = ({ order,removeFromBasket,incriment,deacriment}) => {

   console.log(order);
    return (
    <div className='BasketList'>
   
        {
            order.map((el,index)=><BasketItem
            key={index}
            {...el}
            removeFromBasket={removeFromBasket}
            incriment={incriment}
            deacriment={deacriment}
            />)
        }
    </div>
   
  )
}

export default BasketList 
