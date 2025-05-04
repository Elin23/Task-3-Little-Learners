import React from 'react'
import SubHeroComponent from '../components/SubHeroComponent/SubHeroComponent'
import FeaturesComponent from '../components/FeaturesComponent/FeaturesComponent'
import LearningSectionComponent from '../components/LearningSectionComponent/LearningSectionComponent'
import GallerySectionComponent from '../components/GallerySectionComponent/GallerySectionComponent'

export default function Academics() {
  return (
    <main>
      <SubHeroComponent title={"Nurturing Young Minds for Success"} 
                        text={"Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."}
                        link_label={"Academics"}
      />
      <FeaturesComponent/>
      <LearningSectionComponent/>
      <GallerySectionComponent/>
    </main>
  )
}
