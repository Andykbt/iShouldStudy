import { useState } from 'react';
import Howler, {Howl} from 'react-howler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay} from '@fortawesome/free-solid-svg-icons'
import classes from './Sound.module.css'

//Sound paths
import LightRain from '../../assets/ES_Rain_Light.mp3'
import Fireplace from '../../assets/ES_Fire Fireplace 1 - SFX Producer.mp3'
import Nature from '../../assets/ES_Forest 5 - SFX Producer.mp3'
import Traffic from '../../assets/ES_Urban Traffic - SFX Producer.mp3'
import Cat from '../../assets/ES_Cat Purr Long - SFX Producer.mp3'
import Fan from '../../assets/ES_Bathroom Vent Fan 1 - SFX Producer.mp3'

const Sounds = [
    {sound: LightRain, label: "Rain Falling"},
    {sonund: Cat, label: "Cat Purr"},
    {sound: Traffic, label: "Passing Traffic"},
    {sound: Fireplace, label: "Fireplace"},
    {sound: Nature, label: "Nature"},
    {sound: Fan, label: "Fan"}
]

const Sound = (index) => {
    const [playMusic, setPlayMusic] = useState(false);
    const [volume, setVolume] = useState(50);
    var val = index["index"]

    const togglePlay = () => {  setPlayMusic(!playMusic);   }

    return(
        <div>
            <p>{Sounds[val].label}</p>
            <Howler
                src={Sounds[val].sound}
                playing={playMusic}
                volume={volume/100}
                loop={true}
            />
            
            <div className={classes.controls}>
                <a className={classes.button} onClick={togglePlay}>
                    {playMusic ?
                        <div> <FontAwesomeIcon icon={faPause} /> </div>
                    :!playMusic ?
                        <div> <FontAwesomeIcon icon={faPlay} /> </div>
                    :null
                    }
                </a>

                <input className={classes.slider} type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={volume}
                    onChange={event => {
                        setVolume(event.target.valueAsNumber)
                    }}
                />
            </div>
        </div>
    )
}

export default Sound