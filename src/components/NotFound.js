import React from 'react'
import {useHistory} from 'react-router-dom'


const NotFound = () => {
    let history = useHistory();

    return (
        <div className='container center'>
            <h1>Erreur page introuvable</h1>
            {history.push('/')}
        </div>
    )
}

export default NotFound