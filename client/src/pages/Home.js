
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

// components
import { Image } from 'cloudinary-react';
import EndSequenceComponent from '../components/EndSequenceComponent.js';
import AboutComponent from '../components/AboutComponent.js';


export default function Home() {


    const [showShuffledArray, setShowShuffledArray] = useState(false)
    const [showEndOfSeqLink, setShowEndOfSeqLink] = useState(false);
    const [imageIds, setImageIds] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [endOfArray, setEndOfArray] = useState(false);
    

    useEffect(() => {
     async function fetchImageIds() {
        try {
            const response = await axios.get('api/v1');
            // console.log('response data:  ', response.data)
            setImageIds(response.data)
        } catch (error) {
            console.error('error fetching imageIds data: ', error)
        }
     }
     fetchImageIds()
    }, [])

    
    function handleClick() {
       if (currentIndex < imageIds.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setEndOfArray(true);
        
        }
    }


    function finishSequenceHandler() {
        setShowEndOfSeqLink(true)
    }

    return (
        <Container>
             <div className='home-main'>
            <div className='gallery'>

                {/* shows fixed final image on conditions endOfArray is true AND showEndOfSeqLink is false*/}
                {
                    endOfArray && !showEndOfSeqLink ? (
                        <Image
                        alt='flowers in vase near a computer monitor'
                        className="single-image"
                        key={2298}
                        cloudName={'dxov7pk4a'}
                        publicId={'television_flowers_unique_assets/PICT2408_bzcmpn'}
                        width="250"
                        crop="scale"
                        onClick={() => finishSequenceHandler()}
                    />) 
                    : <></>
                }

                {/* shows end of sequence link*/}
                {
                    showEndOfSeqLink ? (
                        <EndSequenceComponent />
                    ) 
                    : <></>
                }

              

                {/* shows fixed landing image if showShuffledArray is not true */}
                {
                  
                    showShuffledArray ? <></> 
                    :( <Image
                        alt='flower on television'
                        className="single-image"
                        key={2298}
                        cloudName={'dxov7pk4a'}
                        publicId={'television_flowers_unique_assets/PICT2298_eu14gt'}
                        width="250"
                        crop="scale"
                        onClick={() => setShowShuffledArray(true)}
                    />)
                
                }
              
                {/* steps through shuffled array from backend on conditions showShuffledArray is true AND endOfArray is false (prevents two separate Image components rendered at same time)*/}
                {
                    showShuffledArray && !endOfArray? 
                    (<Image
                        alt='random image'
                        className="single-image"
                        key={currentIndex}
                        cloudName={'dxov7pk4a'}
                        publicId={imageIds[currentIndex]}
                        width="250"
                        crop="scale"
                        onClick={() => handleClick()}
                    />) 
                    : <></>
                }

                {/* shows about component on condition showEndOfSeqLink is not true */}
                { 
                    !showEndOfSeqLink ? 
                    <AboutComponent />
                    : <></>
                }
                
            </div>
            
        </div>
        </Container>
       
    );
};