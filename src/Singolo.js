import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


const Tour = ({ id, title, body}) => {

  return (
    <Card bg={'info'} className='carta'>
      <Card.Body className="single-tour" key={id}>
          <Card.Title>
            <h1 className="titolo">{title}</h1>
          </Card.Title>
          <Card.Text>
           {body}
          </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tour;
