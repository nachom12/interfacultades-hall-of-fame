import React from 'react';
import '../styles/championsChart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const ChampionsChart = ({cupType}) =>  {
  return (
    <>
      <div className="chart">
        
        <div className="chart__tittle">
          <div className="chart__tittle--champions">
            <span>CAM</span>
            <span>PE</span>
            <span>O</span>
            <span>NES</span>  
          </div>
          <div className="chart_tittle--description">
            <span>{cupType} <FontAwesomeIcon icon={faTrophy} /></span>
          </div>
        </div>
      </div>
    </>
  )
};

export default ChampionsChart;