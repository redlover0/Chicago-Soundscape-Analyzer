import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import CityCard from "../componets/CityCard";
import BasicStatsButton from "../componets/BasicStatsButton";
import Alert from "../componets/alert";

const home = () => {
  return (
    <div>
        <Alert/>
        <TopNavBar/>
        <BasicStatsButton/>
        <CityCard/>
    </div>
  )
}

export default home