import React from 'react';
import '../styles/tittle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

const Tittle = () => {
  return(
    <>
      <div className="body">
        <h1>INTERFACTULTADES</h1>
        <div className="wallOfChampions">
          <FontAwesomeIcon icon={faCrown}  style={{color: "gold", padding:"10%"}}/>
          <span> WALL OF CHAMPIONS </span>
          <FontAwesomeIcon icon={faCrown} style={{color: "silver", padding:"10%"}}/>
        </div>
      </div>
    </>
  )
}

export default Tittle;