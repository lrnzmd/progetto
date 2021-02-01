import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';


const Singolo = ({ id, title, body}) => {

  return (

    <Card bg={'info'} className='carta' key={id}>
      <Card.Body className="single-tour">

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

export default Singolo;
