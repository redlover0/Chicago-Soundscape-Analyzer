import React from 'react'
import {Button} from "react-bootstrap";
import TopNavBar from "../componets/TopNavBar";
import CityCard from "../componets/CityCard";
import BasicStatsButton from "../componets/BasicStatsButton";

const home = () => {
  return (
    <div>
        <TopNavBar/>
        <BasicStatsButton/>
        <CityCard/>
    </div>
  )
}

export default home