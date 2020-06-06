import React, {useState, useContext} from 'react'
import Modal from '../components/modal/Index'
import exoContext from './contexts/ExoContext'
import { ResumeContext } from '../components/contexts/ResumeContext'

import GJ1 from '../img/J1.png'
import GJ2 from '../img/J2.png'
import GJ3 from '../img/J3.png'
import GJ5 from '../img/J5.png'



const Jambes = () => {

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
        //console.log('Envoyer temps choisi : ' + idTitle +' - '+ breakTime )
        setOpenModal(false);
        dispatch({type: 'ADD_EX_TIME', exo : {
            serie: exercice[exercice.length-1].serie,
            exoLabel: idTitle,
            time : breakTime
        }})
    }



    return(
        <exoContext.Consumer>
        {jambes => {
            return(
                <div className='container center'>
            <h1>Jambes Exercices</h1>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{jambes.J1.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GJ1} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{jambes.J1.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='J1' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{jambes.J2.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GJ2} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{jambes.J2.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='J2' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{jambes.J3.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GJ3} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{jambes.J3.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='J3' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{jambes.J4.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img'  alt="no image"/>
                        </div>
                        <div className="card-content">
                            <p>{jambes.J4.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='J4' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{jambes.J5.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GJ5} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{jambes.J5.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='J5' className='btn' onClick={showModal}>Ajouter</button>
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

export default Jambes