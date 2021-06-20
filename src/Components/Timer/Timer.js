import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay, faStop, faReset, faUndoAlt} from '@fortawesome/free-solid-svg-icons'
import classes from '../Components.module.css'

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const[seconds, setSeconds] = useState(5);
    const[displayMessage, setDisplayMessage] = useState(false);
    const[startTimer, setStartTimer] = useState(true);

    useEffect(() => {
        console.log("Testing: " + startTimer);
        if (startTimer) {
            let interval = setInterval(() => {
                clearInterval(interval);

                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        setDisplayMessage(!displayMessage);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000)
        }
    }, [seconds, startTimer]);

    const toggleTimer = () => { setStartTimer(!startTimer); }
    
    const resetTimer = () => {
        setDisplayMessage(false);
        setStartTimer(false); 
        setMinutes(25); 
        setSeconds(0);
    }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return(
        <div className={classes.Container}>
            <div className={classes.Time}> {timerMinutes}:{timerSeconds} </div>
            {displayMessage && <div>Break time! New session starts in:</div>}
            <button onClick={toggleTimer}>
                {!startTimer ?
                    <FontAwesomeIcon icon={faPlay} />
                :startTimer ?
                    <FontAwesomeIcon icon={faPause} />
                :null
                }
            </button>
            <button onClick={resetTimer}> <FontAwesomeIcon icon={faUndoAlt} /> </button>
        </div>
    );
}

export default Timer