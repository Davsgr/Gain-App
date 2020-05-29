import React, {useState, useContext} from 'react'
import Modal from '../components/modal/Index'
import exoContext from './contexts/ExoContext'
import { ResumeContext } from '../components/contexts/ResumeContext'
import pompe from '../img/pompe.png'

const Pompes = () => {

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
        {pompes => {
            return(
                <div className='container center'>
            <h1>Pompes Exercices</h1>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{pompes.P1.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={pompe} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{pompes.P1.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='P1' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{pompes.P2.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={pompe} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{pompes.P2.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='P2' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{pompes.P3.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={pompe} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{pompes.P3.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='P3' className='btn' onClick={showModal}>Ajouter</button>
                        </div>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-title">
                            <h2>{pompes.P4.id}</h2>
                        </div>
                        <div className="card-image">
                            <img className='responsive-img' src={pompe} alt=""/>
                        </div>
                        <div className="card-content">
                            <p>{pompes.P4.content}</p>
                        </div>
                        <div className="card-action">
                            <button id='P4' className='btn' onClick={showModal}>Ajouter</button>
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

export default Pompes