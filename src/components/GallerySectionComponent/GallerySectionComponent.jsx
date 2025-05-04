import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import GalleryComponent from '../GalleryComponent.jsx/GalleryComponent'

export default function GallerySectionComponent() {
  return (
    <div className='mx-162'>
      <TitleComponent heading={'Our Gallery'} title={'Our Rooms Gallery'}
                text={'Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'}
      />
      <GalleryComponent/>
    </div>
  )
}
