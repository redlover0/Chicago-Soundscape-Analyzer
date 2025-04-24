import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import Alert from "../componets/alert";

const Aboutme = () => {
  return (
      <div>
        <TopNavBar/>
        <div className="hero-title"
             style={{width: '100%', color: 'black', fontSize: 96, fontWeight: '400', wordWrap: 'break-word'}}>Imaging a
            world with SaferSounds.
        </div>
        <p>
            Open Data is free public data published by New York City agencies and other partners <strong> <a href="https://opendata.cityofnewyork.us/learn-open-data/">On linkedin</a></strong>
        </p>
    </div>
)
}

export default Aboutme