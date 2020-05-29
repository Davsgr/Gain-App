import React, {useContext, useState, useEffect} from 'react'
import {ResumeContext} from '../components/contexts/ResumeContext'
import exoContext from './contexts/ExoContext'
import UIfx from 'uifx'
import beepAudio from '../sounds/beep.mp3'
import zeroAudio from '../sounds/zero.mp3'
import finishAudio from '../sounds/finish.mp3'

function Training() {

    const { exercice } = useContext(ResumeContext)
    const [seconds, setSeconds] = useState(5);
    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(3);
    const [toggleBr, setToggleBr] = useState(false);
    const [finishSound, setFinishSound] = useState(false);

    const beep = new UIfx(
        beepAudio,
        {
          volume: 0.4, // number between 0.0 ~ 1.0
          throttleMs: 100
        }
      )
    
    const zero = new UIfx(
    zeroAudio,
        {
            volume: 0.4, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    )

    const finish = new UIfx(
    finishAudio,
        {
            volume: 0.4, // number between 0.0 ~ 1.0
            throttleMs: 100
        }
    )
    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            if (seconds <= 6 && seconds >=2){
                beep.play();
            }
        }, 1000);

        if (seconds === 0) zero.play(); 

        if (seconds === 0 && !toggleBr){
            setCount(count => count + 1);
            }

        else if (exercice[count].time === 'finish' && !finishSound){
            setFinishSound(true);
            finish.play();
            //setSeconds('Good Job !');
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
                            {exercice[count].time === 'finish' ? <p className='temps'>Good job</p> : <p className='temps'>{seconds}</p> }
                            
                        </div>
                    </div>
                </div>
                )
        }}
        </exoContext.Consumer>
    )
}

export default Training
