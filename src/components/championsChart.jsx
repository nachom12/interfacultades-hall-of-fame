import React, { useEffect, useState } from 'react';
import '../styles/championsChart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import TeamsChart from './teamsChart';

const API_URL = 'https://interfacultades-api.vercel.app/api/champions';

const ChampionsChart = ({ cupType }) => {
  

  const [champions, setChampions] = useState([{ data: [] , message:[]}]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(API_URL, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setChampions(data);
        setIsLoaded(true);
        console.log(data);

      })
  }, []); // the second parameter says when is the useState executed. (when [] is mounted, unmounted or updated)


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
            { 
              cupType === 'gold' && <span>Oro <FontAwesomeIcon icon={faTrophy} style={{color: "gold"}}/></span>
            }
            { 
              cupType === 'silver' && <span>Plata <FontAwesomeIcon icon={faTrophy} style={{color: "silver"}}/></span>
            }
          </div>
        </div>
        <div className="teams">
          {
          !isLoaded && <span>loading...</span>
          }  
        </div>
        {
          isLoaded && 
          <div className="teams">
          {
            // eslint-disable-next-line array-callback-return
            champions.data.map((team) => {
              if (team.cup === cupType) return <TeamsChart key={team._id} teamData = {team.teamData[0]} year={team.year} />
            } 
            )
          }
          </div> 
        }
        

      </div>

    </>
  )
};

export default ChampionsChart;