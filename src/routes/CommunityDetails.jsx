import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import City from "../componets/City";
import RandomCityCard from "../componets/RandomCityCard";

const communityDetails = () => {
  return (
      <div>
          <TopNavBar/>
          <p className=" padding font-container" style={{ textSizeAdjust: 'inherit'}}>DOUGLAS</p>
          <City/>
          <RandomCityCard/>
      </div>
  )
}

export default communityDetails