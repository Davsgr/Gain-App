import React, {useState, useContext} from 'react'
import Modal from '../components/modal/Index'
import exoContext from './contexts/ExoContext'
import { ResumeContext } from '../components/contexts/ResumeContext'

import GL1 from '../img/L1.png'
import GL2 from '../img/L2.png'
import GL3 from '../img/L3.png'
import GL4 from '../img/L4.png'


const Lateral = () => {

    const [openModal, setOpenModal] = useState(false);
    const [idTitle, setIdTitle] = useState([]);
    const [breakTime, setBreakTime] = useState('');

    const { dispatch, exercice } = useContext(ResumeContext);

    const showModal = (e) => {
        setIdTitle(e.target.id);
        setOpenModal(true);
    }

    const hideModal = () => {
        setOpenModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Envoyer temps choisi : ' + idTitle +' - '+ breakTime )
        setOpenModal(false);
        dispatch({type: 'ADD_EX_TIME', exo : {
            serie: exercice[exercice.length-1].serie,
            exoLabel: idTitle,
            time : breakTime
        }})
    }



    return(
        <exoContext.Consumer>
        {lateral => {
            return(
                <div className='container center'>
                    <h1>Lateral Exercices</h1>
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <div className="card horizontal">
                                <div className="card-title">
                                    <h2>{lateral.L1.id}</h2>
                                </div>
                                <div className="card-image">
                                    <img className='responsive-img' src={GL1} alt=""/>
                                </div>
                                <div className="card-content">
                                    <p>{lateral.L1.content}</p>
                                </div>
                                <div className="card-action">
                                    <button id='L1' className='btn' onClick={showModal}>Ajouter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l12">
                            <div className="card horizontal">
                                <div className="card-title">
                                    <h2>{lateral.L2.id}</h2>
                                </div>
                                <div className="card-image">
                                    <img className='responsive-img' src={GL2} alt=""/>
                                </div>
                                <div className="card-content">
                                    <p>{lateral.L2.content}</p>
                                </div>
                                <div className="card-action">
                                    <button id='L2' className='btn' onClick={showModal}>Ajouter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l12">
                            <div className="card horizontal">
                                <div className="card-title">
                                    <h2>{lateral.L3.id}</h2>
                                </div>
                                <div className="card-image">
                                    <img className='responsive-img' src={GL3} alt=""/>
                                </div>
                                <div className="card-content">
                                    <p>{lateral.L3.content}</p>
                                </div>
                                <div className="card-action">
                                    <button id='L3' className='btn' onClick={showModal}>Ajouter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l12">
                            <div className="card horizontal">
                                <div className="card-title">
                                    <h2>{lateral.L4.id}</h2>
                                </div>
                                <div className="card-image">
                                    <img className='responsive-img' src={GL4} alt=""/>
                                </div>
                                <div className="card-content">
                                    <p>{lateral.L4.content}</p>
                                </div>
                                <div className="card-action">
                                    <button id='L4' className='btn' onClick={showModal}>Ajouter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal showModal={openModal}>
                        <div className="modalHeader">
                            <h2>{idTitle}</h2>
                        </div>
                        <div className="modalBody">
                        <p>Temps d'execution de l'exercice souhaité (en seconde) </p>
                            <form onSubmit={handleSubmit}>
                                <input type="number" 
                                    value={breakTime}
                                    onChange={(e) => setBreakTime(e.target.value)} 
                                    required/>
                                <input className='btn' type="submit" value="Ajouter" />
                            </form>
                        </div>
                        <div className="footer">
                            <button className="btn red" onClick={hideModal}>Fermer</button>
                        </div>
                    </Modal>
                </div>
            )
        }}

        </exoContext.Consumer>
    )
}

export default Lateral