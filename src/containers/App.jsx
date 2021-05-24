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
          <div className="charts__gold">
            <ChampionsChart cupType={'gold'}  />
          </div>
          <div className="charts__silver">
            <ChampionsChart cupType={'silver'}  />
          </div>
        </section>
      </section>
    </>
  )
};

export default App;



