import React, {useState, useContext} from 'react'
import Modal from '../components/modal/Index'
import exoContext from './contexts/ExoContext'
import { ResumeContext } from '../components/contexts/ResumeContext'


import GA1 from '../img/A1.png'
import GA2 from '../img/A2.png'
import GA3 from '../img/A3.png'
import GA4 from '../img/A4.png'
import GA5 from '../img/A5.png'
import GA6 from '../img/A6.png'
import GA7 from '../img/A7.png'

const Abdo = () => {

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
        {abdo => {
            return(
                <div className='container center'>
            <h1>Abdo Exercices</h1>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A1.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA1} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A1.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A1' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A2.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA2} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A2.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A2' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A3.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA3} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A3.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A3' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A4.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA4} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A4.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A4' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A5.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA5} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A5.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A5' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A6.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA6} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A6.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A6' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{abdo.A7.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={GA7} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{abdo.A7.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='A7' className='btn' onClick={showModal}>Ajouter</button>
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

export default Abdo

