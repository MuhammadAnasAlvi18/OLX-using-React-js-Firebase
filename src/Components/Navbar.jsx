import React, {useState} from 'react'
import logo from '../images/olx-logo-vector.png'
import logoBlack from '../images/olx-logo-vector-black.png'
import sellBTN from "../images/BUTTON.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown ,  faCarRear, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    const [isActive, setisActive] = useState(false);
    const [selected, setselected] = useState("");
    const options = ['Azad Kashmir, Pakistan', 'Balochistan, Pakistan', 'Khyber Pakhtunkhwa, Pakistan', 'Punjab, Pakistan', 'Sindh, Pakistan']

    return (
        <div className='olx_navbar'>
            <div className="container">
                <div className="olx_navbar_top">
                    <img src={logo} alt="logo" onClick={()=>{navigate("/")}}/>
                    <a href="#"><FontAwesomeIcon icon={faCarRear}></FontAwesomeIcon>Motors</a>
                    <a href="#"><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>Property</a>
                </div>

                <div className="olx_navbar_search">
                    <img src={logoBlack} alt="logo" onClick={()=>{navigate("/")}}/>
                    <div className="location_input" onClick={() => {
                        setisActive(!isActive);
                    }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" id="input" placeholder="Pakistan" value={selected} readOnly/>
                        <FontAwesomeIcon className={isActive? "locationSVGup" : "locationSVG"} icon={faAngleDown} />
                        {isActive && <div className="dropdown">
                            <ul>
                                {
                                    options.map((option) => {
                                        return (
                                            <li key={Math.floor(Math.random() * 987654321)} onClick={(e) => {
                                                setselected(option)
                                                setisActive(false)
                                            }}><FontAwesomeIcon icon={faLocationDot}/> {option}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>}
                    </div>

                    <div className="olx_navbar_search_input">
                        <input type="text" placeholder='Find Cars, Mobile Phones and more...' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>

                    <a href="#" className='olx_navbar_login_btn'>Login</a>

                    <Link to="/sell"><img src={sellBTN} className="olx_navbar_sell_img" alt="sell" /></Link>

                </div>

            </div>
        </div>
    )
}

export default Navbar