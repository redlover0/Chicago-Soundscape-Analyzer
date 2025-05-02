import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import pic from "../imgs/Copy of SafeSound_Pitch_FINAL.svg"
import pic2 from "../imgs/Copy Copy of SafeSound_Pitch_FINAL.svg"
import teampic from "../imgs/IMG_2373.jpeg"


const Aboutme = () => {
    return (
        <div>
            <TopNavBar/>
            <div className="text-center">
                <div className="text-center p-3">
                    <img alt="Company picture at google "  className='p-1 img-fluid' style={{width: '18rem'}} src={teampic}/>
                    <p className="">
                        <i className='fw-bold'>SafeSound's Demo @ Detroit Youth Tank Moblity Summit</i>
                    </p>
                </div>
                <p className="p-2">
                    <i className='fw-bold'>The problem with sound today</i>
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <img loading="lazy" alt="SafeSounds Pitching @ The Detroit Youth Tank Moblity Summit  "
                         className='p-1 img-fluid' style={{width: '48rem'}} src={pic}/>
                </div>
            </div>
            <div className="text-center"
                 style={{width: '100%', color: 'black', fontWeight: '400', wordWrap: 'break-word'}}>How we're to solve It
               <div>
                   <img loading="lazy" alt="SafeSounds Pitching @ The Detroit Youth Tank Moblity Summit  "
                        className='p-1 img-fluid' style={{width: '48rem'}} src={pic2}/>
               </div>
                <p>X
                </p>
            </div>
            <p>
                Open Data is free public data published by New York City agencies and other partners <strong> <a
                href="https://opendata.cityofnewyork.us/learn-open-data/">On linkedin</a></strong>
            </p>
        </div>
    )
}

export default Aboutme