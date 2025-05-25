import React from 'react'
import TopNavBar from "../componets/TopNavBar";
import pic from "../assets/Copy of SafeSound_Pitch_FINAL.svg"
import pic2 from "../assets/Copy Copy of SafeSound_Pitch_FINAL.svg"
import teampic from "../assets/IMG_2373.jpeg"
import {HR} from "flowbite-react";
import solution from "../assets/Copy of SafeSound_Pitch_FINALPOMP.svg"
import problem from "../assets/Copy of SafeSound_Pitch_FINAL (1)POMP.svg"


const Aboutme = () => {
    return (
        <div>
            <TopNavBar/>
            <div className="text-center">
                <div className="text-center p-3">
                    <img
                        alt="SafeSound team at Google"
                        className="img-fluid rounded"
                        style={{maxWidth: '400px'}}
                        src={teampic}
                    />                    <p className="">
                        <i className='fw-bold'>SafeSound's Demo @ Detroit Youth Tank Moblity Summit</i>
                    </p>
                </div>
                {/*<div style={{ borderBottom: '20px solid black' }}></div>*/}
                <p className="p-2">
                    <i className='fw-bold' style={{ fontSize: 'xx-large'}}>The problem with sound today</i>
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <img loading="lazy" alt="SafeSounds Pitching @ The Detroit Youth Tank Moblity Summit  "
                         className='p-1 img-fluid' src={pic}/>
                </div>
            </div>
            <div className="text-center"
                 style={{width: '100%', color: 'black', fontWeight: '400', wordWrap: 'break-word'}}>There are existing hearing protection solutions being used to reduce loudness in concert settings, but the problem with those traditional solutions is that they have a fixed level of filtration. Even if the concert loudness is 113 decibels, you're still hearing the sound at roughly 106 decibels, which is problematic since exposure above 85 decibels can cause permanent damage over time.
               <div>
                   <img loading="lazy" alt="SafeSounds Pitching @ The Detroit Youth Tank Moblity Summit  "
                        className='p-1 img-fluid' style={{width: '48rem'}} src={problem}/>
               </div>
                    <img loading="lazy" alt="SafeSounds Pitching @ The Detroit Youth Tank Moblity Summit  "
                         className='p-1 img-fluid' style={{width: '48rem'}} src={solution}/>
            </div>
            <p>
                Open Data is free public data published by New York City agencies and other partners <strong> <a
                href="https://opendata.cityofnewyork.us/learn-open-data/">On linkedin</a></strong>
            </p>
        </div>
    )
}

export default Aboutme