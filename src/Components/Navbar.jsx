import React from 'react'
import logo from '../images/olx-logo-vector.png'
import logoBlack from '../images/olx-logo-vector-black.png'
import sellBTN from "../images/BUTTON.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCarRear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='olx_navbar'>
            <div className="container">
                <div className="olx_navbar_top">
                    <img src={logo} alt="logo" />
                    <a href="#"><FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon>Motors</a>
                    <a href="#"><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>Property</a>
                </div>

                <div className="olx_navbar_search">
                    <img src={logoBlack} alt="logo" />
                    <div className="location_input">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <select name="location">
                            <option value="Karachi ,Sindh">Karachi ,Sindh</option>
                            <option value="Lahore ,Sindh">Lahore ,Sindh</option>
                            <option value="Sukkur ,Sindh">Sukkur ,Sindh</option>
                            <option value="Larkana ,Sindh">Larkana ,Sindh</option>
                            <option value="Islamabad ,Sindh">Islamabad ,Sindh</option>
                        </select>
                        <FontAwesomeIcon className='locationSVG' icon={faAngleDown} />
                    </div>

                    <div className="olx_navbar_search_input">
                        <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </div>

                    <a href="#" className='olx_navbar_login_btn'>Login</a>

                    <Link to="/sell"><img src={sellBTN} className="olx_navbar_sell_img" alt="sell" /></Link>

                </div>

            </div>
        </div>
    )
}

export default Navbar