import React from 'react';
import Singolo from './Singolo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';


const Lista = ({oggetto}) => {
  return (
    <div className='container'>
      <div className="row">
          {oggetto.map((item, index) => {
            return (
            <Col xs={6} key={index}>
              <Singolo {...item} key={index}/>
            </Col>)
          })}
      </div>
    </div>
  );
};



export default Lista;
