import React,{useEffect,useState} from 'react'
import { getAllCategoris } from '../api'
import CategoryList from '../Components/Caregory/CategoryList'
import Search from '../Components/Search/Search'

const Home = () => {
 const [category,setCategory] = useState([])
  const [filteredCategory, setFilteredCategory] = useState([])
  useEffect(() => {
    getAllCategoris().then(data=>{
     setCategory(data.categories);
    })
  }, [])
  
const handleSearch = ((value)=>{
 const newCategory =  category.filter(el=>el.strCategory.toLowerCase().includes(value));
 setFilteredCategory(newCategory)
})

  return (
    <div className='global-div'>
      <Search handleSearch={handleSearch}/>
      <CategoryList category={ filteredCategory.length>0 ?  filteredCategory : category}
      />
    </div>
  )
}

export default Home

