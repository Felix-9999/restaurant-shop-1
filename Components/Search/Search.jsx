import React from 'react'
import "./Search.css"

const Search = ({handleSearch}) => {
  
   
    
    return (
    <div className='search-'>
        <form action="">
       
        <input id="search" type="search"
        placeholder='search Here...'
     onChange={(e)=>handleSearch(e.target.value)} />
     <span class="caret"></span>
   </form>
    </div>
  )
}

export default Search