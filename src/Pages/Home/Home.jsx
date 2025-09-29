import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/Explore Menu/ExploreMenu'
import FoodDisplay from '../../Components/Food Display/FoodDisplay'
import AppDownload from '../../Components/App Download/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home