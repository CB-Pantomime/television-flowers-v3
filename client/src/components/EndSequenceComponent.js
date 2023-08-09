
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const EndSequenceComponent = () => {
  return (
    <Container className='end-sequence-container'>
      <Container className='title-statement-container'>
         <h1>television flowers</h1>
         <p>2016 - 2021</p>
         <p>three mega pixel bliss</p>
         <p>thank you</p>
      </Container>
     
       <p className='get-in-touch-p'>&#8595; pls get in touch &#8595;</p>
       <a 
       className='link-style'
       href="http://www.cbphotoworld.com"
       target="_blank"
       rel="noopener noreferrer"
       >cb photo world</a>
    </Container>
   
  );
};

export default EndSequenceComponent; 