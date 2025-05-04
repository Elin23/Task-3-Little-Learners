import React from 'react'
import './AwardsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import SliderComponent from '../SliderComponent/SliderComponent'
import { awardsData } from '../../data/awards'
import OurBenefitsCardComponent from '../OurBenefitsCardComponent/OurBenefitsCardComponent'
export default function AwardsComponent() {
  return (
    <div className='mx-162' id='awards'>
      <TitleComponent heading={'Our Achievements'} title={"Our Awards and Recognitions"} 
                      text={"Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."}
      />
      <div className="awards-cards-slider mt-100">
        <SliderComponent className='awards' label={"8 More Awards"}>
            {awardsData.map((award, index) => (
                <OurBenefitsCardComponent icon={award.icon} alt={award.alt} title={award.title} text={award.description} className={'awards'}/>
            ))}
        </SliderComponent>
      </div>
    </div>
  )
}
