import React, {useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from '../logo.png'
import M from 'materialize-css'

const Navbar = () => {

    useEffect( () =>{
        M.AutoInit();
    });
    
    return (
        <nav>
            <div className="nav-wrapper white">
                <div className="container">
                    <div className="logo">
                        <Link to ="/" className="brand-logo black-text">
                            <img src={Logo} alt="Logo website"/>
                        </Link>
                    </div>
                    <Link to="/" data-target="mobile" className="sidenav-trigger right"><i className="material-icons black-text">menu</i></Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to ='/Ventral' className='black-text'>Ventral</Link></li>
                            <li><Link to ='/Lateral' className='black-text'>Latéral</Link></li>
                            <li><Link to ='/Pompes' className='black-text'>Pompes</Link></li>
                            <li><Link to ='/Jambes' className='black-text'>Jambes</Link></li>
                            <li><Link to ='/Abdo' className='black-text'>Abdominaux</Link></li>
                        </ul>
                </div>
            </div>
            <ul className="sidenav" id='mobile'>
                <li><Link to ='/Ventral' className='black-text'>Ventral</Link></li>
                <li><Link to ='/Lateral' className='black-text'>Latéral</Link></li>
                <li><Link to ='/Pompes' className='black-text'>Pompes</Link></li>
                <li><Link to ='/Jambes' className='black-text'>Jambes</Link></li>
                <li><Link to ='/Abdo' className='black-text'>Abdominaux</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar)


