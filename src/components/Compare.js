import React, {useState} from 'react'

import {ComparisonContainer, After, Slider, Section} from 'components/StyledComponents'

export const Compare = (images) => {
    const [sliderValue, setSliderValue] = useState("50")
    console.log(sliderValue)

    return (
        <ComparisonContainer url={images.imageA}>
            <After url={images.imageB} style={{width: `${sliderValue}%`}}></After>
            <Slider type="range" min="0" max="100"  onChange={(e) => setSliderValue(e.target.value)}/>
        </ComparisonContainer>
    )
}