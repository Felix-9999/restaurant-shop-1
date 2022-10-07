import React,{useState,useEffect} from 'react'
import {useParams,useNavigate }  from "react-router-dom"
import { getFilterCategore } from '../api'
import MealList from '../Components/Meail/MealList'

const CatigorePage = () => {
const {name} = useParams()

const [meals, setMeals] = useState([])

useEffect(() => {
  getFilterCategore(name)
  .then(data=>{
    setMeals(data.meals)
  })
},[name])

return (
    <div>
    <MealList meals={meals}/>
    </div>
  )
}

export default CatigorePage


