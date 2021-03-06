import React, {useState, useContext} from 'react'
import Modal from '../components/modal/Index'
import exoContext from './contexts/ExoContext'
import { ResumeContext } from '../components/contexts/ResumeContext'

import GA1 from '../img/G1.png'
import GA2 from '../img/G2.png'
import GA3 from '../img/G3.png'
import GA4 from '../img/G4.png'
import GA5 from '../img/G5.png'
import GA6 from '../img/G6.png'


const Ventral = () => {

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
        {ventral => {
            return(
                <div className='container center'>
            <h1>Ventral Exercices</h1>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{ventral.G1.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA1} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{ventral.G1.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='G1' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{ventral.G2.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA2} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{ventral.G2.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='G2' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{ventral.G3.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA3} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{ventral.G3.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='G3' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{ventral.G4.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA4} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{ventral.G4.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='G4' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{ventral.G5.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA5} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{ventral.G5.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='G5' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{ventral.G6.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA6} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{ventral.G6.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='G6' className='btn' onClick={showModal}>Ajouter</button>
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
                            min= "0"
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

export default Ventral