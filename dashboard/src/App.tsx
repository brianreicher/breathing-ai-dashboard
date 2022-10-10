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
  return (
    <div className="App">
      <header className="App-header">
        <img  src={BAI} alt="fireSpot"/>
        <h1> Vital & Exercise Dash</h1>
        <CardGroup>
        <Vital_Card name='Heart Rate' description='Heart Rate Period Avg' rate={77} period={4}/>
        <Vital_Card name='Breathing Rate' description='Breathing Rate Period Avg' rate={55} period={4}/>
        <Vital_Card name='Intraday Exercise' description='Intraday Exercise Period Avg' rate={77} period={4}/>
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
