import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Category = () => {
  return (
    <div className='olx_category'>
      <div className='container'>
      <div className='spanDiv'>
      <span className='allCategorySpan'>All Categories <FontAwesomeIcon icon={faAngleDown}/></span>
      <span>Mobile Phones</span>
      <span>Cars</span>
      <span>Motorcycles</span>
      <span>Houses</span>
      <span>TV - Video - Audio</span>
      <span>Tablets</span>
      <span>Lands & Plots</span>
      </div>
      </div>
    </div>
  )
}

export default Category;