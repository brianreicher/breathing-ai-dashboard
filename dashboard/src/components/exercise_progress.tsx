import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Exercise_Bar(){
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[d.getMonth()];
    const date = month + ' ' + d.getDate().toString() + ', ' + d.getFullYear().toString();
    return(
            <div>
                <h2>Exericse Progress Bars: {date} </h2>
                <br></br>
                <h5>Calories Burned</h5>
                <ProgressBar striped variant="success" animated now={40} />
                <h5>Steps Taken</h5>
                <ProgressBar striped variant="info" animated  now={20} />
                <h5>Flights Climbed</h5>
                <ProgressBar striped variant="warning" animated now={60} />
                <h5>Miles Walked</h5>
                <ProgressBar striped variant="danger" animated now={80} />
            </div>
          );
}