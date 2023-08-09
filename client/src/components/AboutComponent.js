
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const AboutComponent = () => {
  return (
    <Container className='about-container'>
       <p>After five years of photographing flowers on television, from movies and shows, I narrowed down 64 images to be selected for an upcoming book. Over time, the full archive has reached capacity with several hundred images. The first and second books created from the overall series are now out of print. </p>

       <p>This web application serves as a temporary placeholder, and something playful to share, while the third and final book undergoes design and printing stages. Each newly rendered page here will present 14 images, randomly selected from the final 64, flanked by a fixed first image and a fixed last image – 16 images in total. </p>
       {/* <a>contact</a> */}
    </Container>
   
  );
};

export default AboutComponent; 