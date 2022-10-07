import React from 'react'
import MealItem from './MealItem'
import"./Meail.css"



const MealList = ({meals}) => {
  const elements = meals.map((meal,index)=>{
     return <MealItem key={index} {...meal}/>
  })
  return (
    <div className='MealList'>
         {elements}
    </div>
  )
}

export default MealList


// import React from "react";
// import MealItem from "./MealItem";

// const MealList = ({ meals }) => {
//  const elements = meals.map((meal ,index)=>{
//   return <MealItem key={index} {...meal} />
//  })
//   return  (
//     <div>
//       {elements}
//     </div>
//   )
// };

// export default MealList;
