import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause, faPlay, faStop, faReset, faUndoAlt} from '@fortawesome/free-solid-svg-icons'
import classes from '../Components.module.css'

const Timer = () => {
    const [minutes, setMinutes] = useState(25);
    const[seconds, setSeconds] = useState(0);
    const[startTimer, setStartTimer] = useState(false);
    const[displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (startTimer) {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1)
                    } else {
                        let minutes = displayMessage ? 24: 4;
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }
        }, 1000);
        return () => clearInterval(interval)
    }, [startTimer, seconds]);

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
            {displayMessage && <div className={classes.Popup}>Break time!</div>}

            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className={classes.Time}> {timerMinutes}:{timerSeconds} </div>
                <div className={classes.Controls}>
                    <a onClick={toggleTimer}>
                        {!startTimer ?
                            <FontAwesomeIcon icon={faPlay} />
                        :startTimer ?
                            <FontAwesomeIcon icon={faPause} />
                        :null
                        }
                    </a>
                    <a onClick={resetTimer}> <FontAwesomeIcon icon={faUndoAlt} /> </a>
                </div>
            </div>
        </div>
    );
}

export default Timer