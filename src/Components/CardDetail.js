import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import '../App.css'
import { faShareNodes , faHeart} from '@fortawesome/free-solid-svg-icons'

const CardDetail = (props) => {
  
  useEffect(()=>{
    console.log(props)
  },[])

  return (
    <div className='cardDtlMain'>
    <div className='hideImage'>
      <div className='cardDtl'>
        <div className='cardDtl2'>
          <div className='a'>
            <div className='a1'>
              <div className='aa1'></div>
              <div className='aa1'></div>
              <div className='aa1'></div>
            </div>
            <div className='a2'>
              <div className='aa2'>
                <div className='aaa2'>
                  <h1 className='aaa2H1'>Rs 1,800</h1>
                  <h3 className='aaa2H3'>Customize Name Jewellery</h3>
                  <h5 className='aaa2H5'>karachi , pakistan</h5>
                </div>
                <div className='aaa2'>
                  <div style={{display:'flex'}}>
                  <FontAwesomeIcon className='sharenodes' icon={faShareNodes}></FontAwesomeIcon>
                <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1.7em"
                width="1.7em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
              </svg>
                  </div>
                  <h6 className='aaa2H6'>1 hour ago</h6>
                </div>
                </div>
              <div className='aa2'></div>
              <div className='aa2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardDetail