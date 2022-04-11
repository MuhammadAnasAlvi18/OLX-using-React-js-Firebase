import React from 'react'
import logo from '../images/olx-logo-vector.png'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarRear , faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Top = () => {
  return (
    <div className='top'>
    <Link to='/'>
    <img src={logo} alt='logo' className='logo'></img>
    </Link>
    <h4 className='h4'>
       <FontAwesomeIcon className='car' icon={faCarRear}></FontAwesomeIcon>&nbsp;
       Motors
       </h4>
       <h4 className='h4'>
       <FontAwesomeIcon className='car' icon={faBuilding}></FontAwesomeIcon>&nbsp;
       Property
      </h4>
      </div>
  )
}

export default Top