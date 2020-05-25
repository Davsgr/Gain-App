import React, {useContext, useState, useEffect} from 'react'
import {ResumeContext} from '../components/contexts/ResumeContext'
import exoContext from './contexts/ExoContext'

function Training() {

    const { exercice } = useContext(ResumeContext)
    const [seconds, setSeconds] = useState(5);
    const [count, setCount] = useState(0);

    
    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds === 0){
            setCount(count => count + 1);
            }
        else if (seconds === -1){
            setSeconds(exercice[count].time);
            
        }
        else if (exercice[count].time === 'finish'){
            setSeconds('Good Job !');
        }
        return () => clearInterval(interval);
      }, [seconds, exercice]);



    return (
        <exoContext.Consumer>
        {exo => {
            return(
        <div className='container center'>
            <div className="timer">
                <div className="container">
                    <p>{exercice[count].exoLabel}</p>
                    <p>{exo.L2.content}</p>
                    <p className='temps'>{seconds}</p>
                </div>
            </div>
        </div>
        )
        }}
        </exoContext.Consumer>
    )
}

export default Training
