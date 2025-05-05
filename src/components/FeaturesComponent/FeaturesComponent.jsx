import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { features } from '../../data/featuresData'
import OurBenefitsCardComponent from '../OurBenefitsCardComponent/OurBenefitsCardComponent'
import './FeaturesComponent.css'
export default function FeaturesComponent() {
  return (
    <div className='mx-162' id='features'>
      <TitleComponent heading={"Our Features"} title={"Our Special Features"} 
                      text={"Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"}
      />
      <div className="features-cards mt-100">
        {
            features.map((feature, index) => (
                <OurBenefitsCardComponent icon={feature.icon} alt={feature.alt} title={feature.title} text={feature.description}/>
            ))
        }
      </div>
    </div>
  )
}
