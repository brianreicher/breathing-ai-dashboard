import React from 'react';
import './App.css';
import {Button, Breadcrumb, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vital_Card from './components/vital_card';
import Exercise_Bar from './components/exercise_progress';
import Exercise_History from './components/history_table';
import Vital_Plot from './components/vital_plot';

import BAI from './bai.png';


function App() {
  const data_fetch = () =>{
    // ADD SUNNY'S FETCH REQUEST 
  }
  return (
    <div className="App">
      <header className="App-header">
        <img  src={BAI} alt="fireSpot"/>
        <h1> Vital & Exercise Dash</h1>
        <CardGroup>
        <Vital_Card name='Active Heart Rate Period Avg' description='Heart Rate Period Avg' rate={77} period={4} unit='bpm'/>
        <Vital_Card name='Breathing Rate Period Avg' description='Breathing Rate Period Avg' rate={55} period={4} unit='brpm'/>
        <Vital_Card name='Intraday Exercise Period Avg' description='Intraday Exercise Period Avg' rate={77} period={4} unit='kCal'/>
        </CardGroup>
        <br>
        </br>
        <div>
        <Exercise_Bar></Exercise_Bar>
        <br>
        </br>
        <Exercise_History></Exercise_History>
        </div>
        <div>
          <Vital_Plot></Vital_Plot>
        </div>
      </header>
    </div>
  );
}

export default App;
