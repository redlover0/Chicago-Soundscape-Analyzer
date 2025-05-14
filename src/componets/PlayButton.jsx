import React, {useEffect, useRef} from 'react'
// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import { PauseIcon, PlayIcon } from '@vidstack/react/icons';
import {useState} from "react";

import audioFile from "../assets/Lido_Sink & Cup(FX)_92bpm.wav";


const PlayButton = () => {
    const [audio, setAudio] = useState(new Audio(audioFile));
    const [isPaused, setIsPaused] = useState(false);

    // make it so that i can pause the sound and it changes the to pause then if i click it again it will change back
    const playSound = () => {
        if (isPaused) {
            audio.play();
        } else {
        audio.pause();
        }
        setIsPaused(!isPaused)
    }


    return (
        <div>
            <button className="bg-transparent border-0" onClick={playSound}>
                {isPaused ? <PlayIcon size={40}/> : <PauseIcon size={40}/>}
            </button>
            {/*<PlayIcon size={40} onClick={() => setAudio(audio + 1) } />*/}
        </div>
    )
}

export default PlayButton