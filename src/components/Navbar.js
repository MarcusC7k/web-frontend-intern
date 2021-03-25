import React , {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import Dropdown from './Dropdown'

function Navbar() {

    const [click, setClick] = useState(false);
    const [dropdown_North, setDropdown_North] = useState(false);
    const [dropdown_Mid, setDropdown_Mid] = useState(false);
    const [dropdown_South, setDropdown_South] = useState(false);
    const [dropdown_East, setDropdown_East] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const onMouseEnter_North = () => {
        if( window.innerWidth <= 960 ) {
            setDropdown_North(false);
        } else {
            setDropdown_North(true);
        }
    }

    const onMouseEnter_Mid = () => {
        if( window.innerWidth <= 960 ) {
            setDropdown_Mid(false);
        } else {
            setDropdown_Mid(true);
        }
    }

    const onMouseEnter_South = () => {
        if( window.innerWidth <= 960 ) {
            setDropdown_South(false);
        } else {
            setDropdown_South(true);
        }
    }

    const onMouseEnter_East = () => {
        if( window.innerWidth <= 960 ) {
            setDropdown_East(false);
        } else {
            setDropdown_East(true);
        }
    }

    const onMouseLeave = () => {
            setDropdown_North(false);
            setDropdown_Mid(false);
            setDropdown_South(false);
            setDropdown_East(false);
    }
    
    const extendElement_North = () => {
        dropdown_North ? setDropdown_North(false) : setDropdown_North(true);
    }
    
    const extendElement_Mid = () => {
        dropdown_Mid ? setDropdown_Mid(false) : setDropdown_Mid(true);
    }

    const extendElement_South = () => {
        dropdown_North ? setDropdown_South(false) : setDropdown_South(true);
    }
    
    const extendElement_East = () => {
        dropdown_Mid ? setDropdown_East(false) : setDropdown_East(true);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick = {closeMobileMenu} >
                        景點大集合 <i className="fas fa-snowboarding"/>
                    </Link>
                    <div className="menu-icon"  onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/scenicSpot' className='nav-links' onClick={closeMobileMenu}>
                                全台
                            </Link>
                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter_North}
                            onMouseLeave={onMouseLeave} onClick={extendElement_North} 
                        >
                            <Link className='nav-links'>
                                北部  <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown_North && <Dropdown onCloseMobileMenu={closeMobileMenu} first={0} last={6} />}

                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter_Mid}
                            onMouseLeave={onMouseLeave} onClick={extendElement_Mid} 
                        >
                            <Link className='nav-links' >
                                中部 <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown_Mid && <Dropdown onCloseMobileMenu={closeMobileMenu} first={6} last={11} />}
                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter_South}
                            onMouseLeave={onMouseLeave} onClick={extendElement_South} 
                        >                            
                            <Link  className='nav-links' >
                                南部 <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown_South && <Dropdown onCloseMobileMenu={closeMobileMenu} first={11} last={16} />}

                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter_East}
                            onMouseLeave={onMouseLeave} onClick={extendElement_East} 
                        >                            
                            <Link  className='nav-links' >
                                東部與外島 <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown_East && <Dropdown onCloseMobileMenu={closeMobileMenu} first={16} last={22} />}

                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}
export default Navbar