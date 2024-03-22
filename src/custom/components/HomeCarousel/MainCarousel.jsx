import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData'

const MainCarousel = () => {

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer'
    role='presentation' src={item.image} style={{ height: '440px', width:'1400px'}} alt=''/>)

  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1900}
        infinite
        Height={200}
        
    />
  )
}

export default MainCarousel
