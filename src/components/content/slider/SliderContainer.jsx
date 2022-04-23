import React from 'react';
import {bigImages, smallImages} from "../../../components/data";
import SlideControl from "./sliderControl/SlideControl";
import Slider from "./Slider";
import {useDispatch, useSelector} from "react-redux";
import {setIndexImage} from "../../../features/productImageCurrent";

function SliderContainer({mode, setMode}) {
    const {index} = useSelector(state => state.imageIndex);
    const dispatch = useDispatch();
    const handleSlide = direction =>{
        if(direction === 'next'){
            index < bigImages.length -1  && dispatch(setIndexImage(index + 1))
        }
        else if(direction === 'prev'){
            0 < index && dispatch(setIndexImage(index - 1))
        }
    };
    return (
        <>
            <SlideControl mode={mode} handleSlide={handleSlide}/>
            <Slider
                bigImages={bigImages}
                smallImages={smallImages}
                setMode={setMode}
            />

        </>
    );
}

export default SliderContainer;