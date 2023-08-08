
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import QuoteComponent from '../components/QuoteComponent.js';
import EndSequenceComponent from '../components/EndSequenceComponent.js';
import HeroTextComponent from '../components/HeroTextComponent.js';

export default function Home() {


    const [showShuffledArray, setShowShuffledArray] = useState(false)
    const [showEndOfSeqLink, setShowEndOfSeqLink] = useState(false);
    const [imageIds, setImageIds] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [endOfArray, setEndOfArray] = useState(false)

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
        setEndOfArray(true)
        }
    }


    function finishSequenceHandler() {
        setShowEndOfSeqLink(true)
    }

    return (
        <Container>
            {/* <HeroTextComponent /> */}
             <div className='home-main'>
            
            <div className='gallery'>

                {/* shows fixed final image */}
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

                {/* shows end of sequence link */}
                {
                    showEndOfSeqLink ? (
                        <EndSequenceComponent />
                    ) 
                    : <></>
                }

                {/* shows quote component at end of array */}
                {
                    endOfArray ? (
                        //  <QuoteComponent />
                        <></>
                    )
                    : <></>
                }

                {/* shows fixed landing image */}
                {
                    showShuffledArray ? <></> 
                    : ( <Image
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
               
                {/* steps through shuffled array from backend */}
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

           
            </div>
        </div>
        </Container>
       
    );
};