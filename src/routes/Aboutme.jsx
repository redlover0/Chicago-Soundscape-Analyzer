import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import Alert from "../componets/alert";
import pic from "../imgs/IMG_2373.jpeg"

const Aboutme = () => {
  return (
      <div>
        <TopNavBar/>
          <div className="text-center">
        <img alt="Company picture at google "  className='p-1 img-fluid' style={{width: '18rem'}} src={pic}/>
              <p className="">
                  <i className='fw-bold'>SafeSound's Demo @ Detroit Youth Tank Moblity Summit</i>
              </p>
          </div>
        <div className="hero-title"
             style={{width: '100%', color: 'black', fontWeight: '400', wordWrap: 'break-word'}}> TLDR:
            goal = build a world where sounds are safer
            <p>
                (for all concertgoers)
            </p>
            <p className="fw-bold">
                how =  SafeSound is building hearing protection devices that allows for full control + protection for the concertgoers experience.
            </p>
            <p>Founded August 7th, 2025, quite literally in the middle of a pit in the concert i thought to myself, How can i make concerts Safer, that following morning i wrote it down
            </p>
        </div>
        <p>
            Open Data is free public data published by New York City agencies and other partners <strong> <a href="https://opendata.cityofnewyork.us/learn-open-data/">On linkedin</a></strong>
        </p>
    </div>
)
}

export default Aboutme