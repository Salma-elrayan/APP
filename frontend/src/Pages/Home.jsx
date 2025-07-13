import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from './../Components/LatestCollection';
import BestSeller from '../Components/BestSeller';
import OurPolicy from '../Components/OurPolicy';
import NewLatterBox from '../Components/NewLatterBox';


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewLatterBox/>
    </div>
  )
}

export default Home