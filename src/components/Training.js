import React, {useContext, useState, useEffect} from 'react'
import {ResumeContext} from '../components/contexts/ResumeContext'
import exoContext from './contexts/ExoContext'

function Training() {

    const { exercice } = useContext(ResumeContext)
    const [seconds, setSeconds] = useState(5);
    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(3);
    const [toggleBr, setToggleBr] = useState(false);
    
    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);

        if (seconds === 0 && !toggleBr){
            setCount(count => count + 1);
            }

        else if (exercice[count].time === 'finish'){
            setSeconds('Good Job !');
            }

        else if (seconds === -1 && !toggleBr){

                setSeconds(exercice[count].time);
                setToggleBr(true)
            
            }
        else if (seconds == -1 && toggleBr){
            if (exercice[count+1].pauseSerie != 0 ){
                setSeconds(exercice[count+1].pauseSerie);
                setCount(count => count + 1);
                setToggleBr(false);
                }
            else {
                setSeconds(pause);
                setToggleBr(false);
            }
        }
        return () => clearInterval(interval);
      }, [seconds]);


    return (
        <exoContext.Consumer>
        {exo => {

            let test= exo[exercice[count].exoLabel];
            return(
                <div className='container center'>
                    <div className="timer">
                        <div className="container">
                            {toggleBr ? <p>{exercice[count].exoLabel}</p> : <p>Respire et prépare toi...</p> }
                            {test && toggleBr ?  <p key={test.id}>{test.content}</p> : null }
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
