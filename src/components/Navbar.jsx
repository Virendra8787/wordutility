import React from 'react';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <div className='nav-container'>
            <div className='fs-2'>Word Utility</div>
            <div className='nav-ul'>
                <ul>

                </ul>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode === 'light' ? 'Light' : 'Dark'} </label> <br />
            </div>

        </div>
    )
}

export default Navbar
