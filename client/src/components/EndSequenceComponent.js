
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const EndSequenceComponent = () => {
  return (
    <Container className='end-sequence-container'>
       <p>Thank you.</p>
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