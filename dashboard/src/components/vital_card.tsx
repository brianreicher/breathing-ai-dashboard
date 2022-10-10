import React from 'react';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Vital_Card(props: any){
    return (
        <div className="card">
            <Card
                    body
                    style={{
                        width: '18rem'
                    }}>
            <img
                alt={props.value}
            />
            <Card.Body>
                <Card.Title className="mb-1 text-muted">
                {props.name}
                </Card.Title>
                {/* <Card.Subtitle
                className="mb-2 text-muted"
                >
                Card subtitle
                </Card.Subtitle> */}
                <Card.Text className="mb-3 text-muted">
                    {props.rate}
                </Card.Text>
                <Button>
                Fetch Latest {props.description} Data
                </Button>
            </Card.Body>
            </Card>
        </div>
    )
}