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
                    2
                </th>
                <td>
                    Jacob
                </td>
                <td>
                    Thornton
                </td>
                <td>
                    @fat
                </td>
                </tr>
                <tr>
                <th scope="row">
                    3
                </th>
                <td>
                    Larry
                </td>
                <td>
                    the Bird
                </td>
                <td>
                    @twitter
                </td>
                </tr>
            </tbody>
            </Table>
    </div>
    );
}