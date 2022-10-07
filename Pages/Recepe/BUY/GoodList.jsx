import React from 'react'
import Recepe from '../Recepe';
import BasketItem from './BasketItem';
import GoodItem from './GoodItem';
import"./Buy.css"



const GoodList = ({goods, newBasketShow}) => {
   
    return (
    <div className='goodList'>
        {
            goods.map((el,index)=><GoodItem key={index} {...el} newBasketShow={newBasketShow}/>)
        }
    </div>
  )
}

export default GoodList