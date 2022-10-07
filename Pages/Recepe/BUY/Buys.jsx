import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../../../api'
import BasketList from './BasketList'
import GoodList from './GoodList'
const Buys = () => {
 const [order, setOrder] = useState([])
 const [goods, setgoods] = useState([])
  const {id} =  useParams()
  useEffect(() => {
    getMealById(id).then(data=>{
      setgoods(data.meals);
    })
   }, [])
   
   const newBasketShow =  ((item)=>{ 
    const newItemIndex = order.findIndex(el=> el.id === item.id) 
    if(newItemIndex<0) {
       const newOrder = {
         ...item,
         cuantity:1
       }
       setOrder([...order,newOrder])
    } else {
     const newOrder = order.map((el,index)=>{
       if(  index == newItemIndex) {
         return {
           ...el,
           cuantity:el.cuantity+1
         }
       } else {
         return el
       }
     })
   setOrder(newOrder) 
   }
   })
 
const removeFromBasket = ((id)=>{
       const newOrder = order.filter(el=>el.id!==id)
        setOrder(newOrder)
     })

    const incriment =  ((id)=>{
         const newOrder = order.map((el)=>{
           if(el.id === id) {
             return {
               ...el,
               cuantity:el.cuantity+1
              }
           } else {
             return el
           }
         })
      setOrder(newOrder)
       })

   const deacriment = ((id)=>{
    const newOrder = order.map((el)=>{
      if(el.id === id) {
       return {
         ...el,
         cuantity:el.cuantity>0 ?el.cuantity-1:0
       }
     } else {
       return el
     }
   })
 setOrder(newOrder)
 })
  //  const hendlBasketSHo = (()=>{
  //    setBasketShow(!isBasketShow)
  //  }) 
          return (
   
   
   <div>
   {console.log(order)}
   <BasketList 
     order={order} 
     removeFromBasket={removeFromBasket}
     incriment={incriment}
     deacriment={deacriment}/>
     <GoodList goods={goods} newBasketShow={newBasketShow}/>
    </div>
  )
}

export default Buys