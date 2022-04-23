import React, {useState} from 'react';
import {bigImages, smallImages} from "../../../components/data";
import SlideControl from "./sliderControl/SlideControl";
import Slider from "./Slider";

function SliderContainer({mode, setMode}) {
    const [indexCurImg, setIndexCurImg] = useState(0);
    const handleSlide = (e, direction) =>{
        if(direction === 'next'){
            console.log('nEXT')
            indexCurImg < bigImages.length -1  && setIndexCurImg(prev => prev + 1)
        }
        else if(direction === 'prev'){
            console.log('pRev')
            0 < indexCurImg && setIndexCurImg(prev => prev - 1)
        }
    };
    return (
        <>
            <SlideControl mode={mode} handleSlide={handleSlide}/>
            <Slider
                bigImages={bigImages}
                smallImages={smallImages}
                indexCurImg={indexCurImg}
                setIndexCurImg={setIndexCurImg}
                setMode={setMode}
            />

        </>
    );
}

export default SliderContainer;