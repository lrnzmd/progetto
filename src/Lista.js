import React from 'react';
import Singolo from './Singolo';
const Lista = ({oggetto}) => {
  return (
    <section>

        {oggetto.map((item) => {
          return <Singolo {...item}/>;
        })}
     
    </section>
  );
};

export default Lista;
