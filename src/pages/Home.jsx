import React from 'react'
import HeroComponent from '../components/HeroComponent/HeroComponent'
import OurBenefitsSectionComponent from '../components/OurBenefitsSectionComponent/OurBenefitsSectionComponent'
import TestimonialsSectionComponent from '../components/TestimonialsSectionComponent/TestimonialsSectionComponent'
import FaqComponent from '../components/FaqComponent/FaqComponent'
import NavigateSectionComponent from '../components/NavigateSectionComponent/NavigateSectionComponent'
export default function Home() {
  return (
    <main>
      <HeroComponent main_img={'/assets/imgs/ImageContainer.png'}
                     title={'Welcome to Little Learners Academy'} heading={'Where Young Minds Blossom and '}
                     highlighted={'Dreams Take Flight.'}
                     text={'Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'}
      />
      <OurBenefitsSectionComponent/>
      <TestimonialsSectionComponent/>
      <FaqComponent/>
      <NavigateSectionComponent/>
    </main>
  )
}
