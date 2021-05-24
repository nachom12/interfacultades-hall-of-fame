import React from 'react';
import '../styles/teamsChart.css';

const TeamsChart = ({teamData, year}) => {
  return(
    <>
      <div className= "teamChart">
        <div className="teamPhoto">
          <img alt="escudo" src={teamData.logo} />
        </div>
        <div className="teamInfo">
          <div className="teamInfo--year">
            <span>{year}</span>
          </div>
          <div className="teamInfo--teamName">
            <span>{teamData.name}</span>
          </div>
          <div className="teamInfo--teamAlias">
            <span>{teamData.alias}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamsChart;