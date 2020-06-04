import React, { useContext, useState } from 'react'
import Modal from '../components/modal/Index'
import {Link, useHistory} from 'react-router-dom'
import {ResumeContext} from '../components/contexts/ResumeContext'


const Resume = () => {

    let history = useHistory();
    const { exercice, dispatch, initialState } = useContext(ResumeContext)

    const [startProg, setStartProg] = useState(false);
    const [breakSerie, setBreakSerie] = useState('');
    const [openModal, setOpenModal] = useState(false);

    console.log(exercice)

    const handleReset = () => {
        setStartProg(false);
        history.push('/Ventral')
        dispatch({type: 'RESET' , initialState})
    }

    const showModal = () => {
        setOpenModal(true);
    }

    const hideModal = () => {
        setOpenModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Envoyer temps choisi : ' + breakSerie)
        setOpenModal(false);
        dispatch({type: 'ADD_SERIE', exo : {
            serie: exercice[exercice.length-1].serie + 1,
            pauseSerie: breakSerie,
            exoLabel: null,
            time: null
        }})
    }

    const handleStart = () => {
        setStartProg(true);
        dispatch({type: 'START_TRAINING', exo: {
            training: true,
            time: 'finish'
        }})
    } 
    return (
        !startProg ? (
        <div className="resume">
            <div className='container'>
                <table className='resume_ex'>
                    <thead>
                        <tr>
                            <td><h5>Serie</h5></td>
                            <td colSpan='12'><h5>Exercice + pauses</h5></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Serie 1</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 1 && exercice.exoLabel != null) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 2 && exercice.pauseSerie) {
                                return (
                                    <td key={exercice.id}> Pause {exercice.pauseSerie} s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            <td>Serie 2</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 2 && exercice.exoLabel != null) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 3 && exercice.pauseSerie) {
                                return (
                                    <td key={exercice.id}> Pause {exercice.pauseSerie} s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            <td>Serie 3</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 3 && exercice.exoLabel != null) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 4 && exercice.pauseSerie) {
                                return (
                                    <td key={exercice.id}> Pause {exercice.pauseSerie} s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            <td>Serie 4</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 4 && exercice.exoLabel != null) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                    </tbody>
                </table>
                <div className="container">
                    <div className="left">
                        <button className={exercice[exercice.length-1].serie === 4 ? 'btn disabled' : 'btn'} onClick={showModal}>Add new Serie</button>
                    </div>                
                    <div className="right">
                        <button className='btn grey' onClick={handleReset}>Reset</button>
                    </div>
                </div>
                <div className="container center">
                <Link to ='/Training' className='black-text'>
                    <button className='btn-large red' onClick={handleStart}>
                        START
                    </button>
                </Link> 
                </div>
            </div>

            <div className="container center">
                <Modal showModal={openModal}>
                    <div className="modalHeader">
                        <h2>Pause</h2>
                    </div>
                    <div className="modalBody">
                    <p>Temps de pause entre série souhaité (en seconde) </p>
                        <form onSubmit={handleSubmit}>
                            <input type="number" 
                                value={breakSerie}
                                onChange={(e) => setBreakSerie(e.target.value)} 
                                required/>
                            <input className='btn' type="submit" value="Ajouter" />
                        </form>
                    </div>
                    <div className="footer">
                        <button className="btn red" onClick={hideModal}>Fermer</button>
                    </div>
                </Modal>
            </div>
        </div>
        ) : (
            <div id='resetStart' className="container">
                <div className="center">
                    <button className='btn grey' onClick={handleReset}>Reset</button>
                </div>

                <table className='resume_ex_training'>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Serie 1</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 1) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 2 && exercice.pauseSerie) {
                                return (
                                    <td key={exercice.id}> Pause {exercice.pauseSerie} s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            <td>Serie 2</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 2) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 3 && exercice.pauseSerie) {
                                return (
                                    <td key={exercice.id}> Pause {exercice.pauseSerie} s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            <td>Serie 3</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 3) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 4 && exercice.pauseSerie) {
                                return (
                                    <td key={exercice.id}> Pause {exercice.pauseSerie} s</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                        <tr>
                            <td>Serie 4</td>
                            {exercice.map( (exercice) => {
                               if  (exercice.serie === 4) {
                                return (
                                    <td key={exercice.id}> {exercice.exoLabel} {exercice.time}</td>
                                )
                                }
                                else return null
                            })}
                        </tr>
                    </tbody>
                </table>

            </div>
        )

    )
}

export default Resume