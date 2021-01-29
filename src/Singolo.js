import React from 'react';

const Tour = ({ id, title, body}) => {

  return (
    <article className="single-tour">
            <h1>{title}</h1>
            <p>{body}</p>
    </article>
  );
};

export default Tour;
