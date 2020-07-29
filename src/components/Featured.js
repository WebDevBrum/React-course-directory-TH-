import React from 'react';

const Featured = ({match}) => {
  let name = match.params.name; //we did use TLit at one point to use first name , last name :fname-:lname , ${} ${}
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;