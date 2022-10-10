import React from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Exercise_History(props: any){

    return(
        <div>
            <h2>Exercise Log</h2>
            <Table hover>
            <thead className="mb-2 text-muted">
                <tr>
                <th>
                    Day
                </th>
                <th>
                    Calories (kCal)
                </th>
                <th>
                    Steps (nSteps)
                </th>
                <th>
                    Flights (nFlights)
                </th>
                <th>
                    Miles (mi)
                </th>
                </tr>
            </thead>
            <tbody className="mb-2 text-muted">
                <tr>
                <th scope="row">
                    10-08-2022
                </th>
                <td>
                    2500
                </td>
                <td>
                    13000
                </td>
                <td>
                    10
                </td>
                <td>
                    10.2
                </td>
                </tr>
                <tr>
                <th scope="row">
                10-09-2022
                </th>
                <td>
                    3000
                </td>
                <td>
                    15000
                </td>
                <td>
                    12
                </td>
                <td>
                    11
                </td>
                </tr>
                <tr>
                <th scope="row">
                    10-10-2022
                </th>
                <td>
                    2400
                </td>
                <td>
                    10000
                </td>
                <td>
                    7
                </td>
                <td>
                    8
                </td>
                </tr>
            </tbody>
            </Table>
    </div>
    );
}