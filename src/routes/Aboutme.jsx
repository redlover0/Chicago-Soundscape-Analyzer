import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import Alert from "../componets/alert";
import pic from "../imgs/Copy of SafeSound_Pitch_FINAL.svg"


const Aboutme = () => {
  return (
      <div>
        <TopNavBar/>
          <div className="text-center">
              <p className="p-2">
                  <i className='fw-bold'>The problem with sound today</i>
              </p>
        <img alt="Company picture at google "  className='p-1 img-fluid' style={{width: '48rem'}} src={pic}/>
          </div>
        <div className="hero-title"
             style={{width: '100%', color: 'black', fontWeight: '400', wordWrap: 'break-word'}}> There we established our vision and mission to build a world where people can enjoy concerts without fear of developing noise induced hearing loss.
            <p>
                We're a team of 3 students who met in Cohort of Google Code Next.
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