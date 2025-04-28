import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { ourBenefit } from '../../data/ourBenefitsData'
import OurBenefitsCardComponent from '../OurBenefitsCardComponent/OurBenefitsCardComponent'
import './OurBenefitsSectionComponent.css'
export default function OurBenefitsSectionComponent() {
  return (
    <div className='mx-162'>
      <TitleComponent heading={'Children Deserve Bright Future'} title={'Our Benefits'}
                      text={"With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."}
      />
      <div className="our-benefits-cards">
        {ourBenefit.map((benefit, index)=>(
            <OurBenefitsCardComponent icon={benefit.icon} alt={benefit.alt} title={benefit.title} text={benefit.text}/>
        ))}
      </div>
    </div>
    
  )
}
