import React from 'react'
import {Button} from "react-bootstrap";
import TopNavBar from "../componets/TopNavBar";
import Cards from "../componets/Cards";

const home = () => {
  return (
    <div>
        <TopNavBar/>
        <Button>
            Bootstrap- Button
        </Button>
        <Cards/>
    </div>
  )
}

export default home