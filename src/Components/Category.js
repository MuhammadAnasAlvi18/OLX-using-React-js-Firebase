import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Category = () => {
  return (
    <div className='categories'>
       <label htmlFor='category'>
         <a id='category' href='#'>ALL CATEGORIES</a>&nbsp;&nbsp;
         <FontAwesomeIcon className='angle-icon angle-icon-2' icon={faAngleDown}></FontAwesomeIcon>
       </label>
       <a className='category' href='#'>Mobile Phones</a>
       <a className='category' href='#'>Cars</a>
       <a className='category' href='#'>Motorcycles</a>
       <a className='category' href='#'>Houses</a>
       <a className='category' href='#'>TV-Video-Audio</a>
       <a className='category' href='#'>Tablets</a>
       <a className='category' href='#'>Land & Plots</a>
     </div>
  )
}

export default Category