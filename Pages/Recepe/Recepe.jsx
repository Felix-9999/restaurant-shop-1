import React,{useState,useEffect} from 'react'
import {useParams ,useNavigate} from"react-router-dom"
import { getMealById } from '../../api'
import Buys from './BUY/Buys'
import "./Recepe.css"
const Recepe = () => {
  const {id} =  useParams()
  const navigat = useNavigate()
  const [recipe, setrecipe] = useState({})
  
  useEffect(()=>{
    getMealById(id).then(data=>{
     setrecipe(data.meals[0]);
    })
  },[])
  return (
    <div className='recepe-global'>
       <div className='recepe'>
         <img src={recipe.strMealThumb} alt="" />
      <Buys/>
         <button className='go-back' onClick={()=>navigat(-1)}>go back</button>
    
</div>
    </div>
  )
}

export default Recepe
