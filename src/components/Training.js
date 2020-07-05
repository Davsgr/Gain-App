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
    const [pause, setPause] = useState(15);
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
            volume: 1.0, // number between 0.0 ~ 1.0
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
        //let interval = null;

        let interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            if (seconds <= 6 && seconds >=2){
                beep.play();
            }
        }, 970);

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
            
            
            let imgLabel = exercice[count].exoLabel;

            //console.log(imgLabel)
            if (imgLabel === 'P1' || imgLabel ==='P2' || imgLabel ==='P3' || imgLabel ==='P4'){
                imgLabel = 'pompe';
            } 

            if (imgLabel === 'J4'){
                imgLabel = 'no-image';
            }
            let selectExercice= exo[exercice[count].exoLabel];
            return(
                <div className='container center'>
                    <div className="timer">
                        <div className="container">
                            {toggleBr ? <p>Série : {exercice[count].serie} Exercice: {exercice[count].exoLabel}</p> : <div className="center">
                                                                                                                        <p>Respire et prépare toi...</p>
                                                                                                                    </div>}
                            {selectExercice && toggleBr ?  (<div className="container">
                                                                <p>{selectExercice.content}</p>
                                                                <div className="container center">
                                                                    <img src={require('../img/'+imgLabel+'.png')} alt="no image"/>
                                                                </div>
                                                            </div>) : null }
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
