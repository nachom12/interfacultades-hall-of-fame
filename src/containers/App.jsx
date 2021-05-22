import React from 'react';
import '../styles/App.css';
import ChampionsChart from '../components/championsChart';
import Tittle from '../components/tittle';


const App = () => {
  return (
    <>
      <section className="body">
        <section className="header">
          <Tittle />
        </section>
        <section className="charts">
          <ChampionsChart cupType='Oro'/>
          <ChampionsChart cupType='Plata'/>
        </section> 
      </section>
    </>
)};

export default App;



