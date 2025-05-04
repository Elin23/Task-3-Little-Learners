import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import SliderComponent from '../SliderComponent/SliderComponent'
import {testimonials} from "../../data/testimonialsData"
import TestimonialCardComponent from '../TestimonialCardComponent/TestimonialCardComponent'
import './TestimonialsSectionComponent.css'
export default function TestimonialsSectionComponent() {
  return (
    <div className='testimonials-section-container mx-162' id='testimonials'>
      <TitleComponent heading={"Their Happy Words 🤗"}
                      title={"Our Testimonials"}
                      text={"Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."}/>
      <SliderComponent>
        {testimonials.map((testimonial, index) => (
          <TestimonialCardComponent avatar={testimonial.img} name={testimonial.name} rate={testimonial.rate} text={testimonial.testimonial}/>
        ))}
      </SliderComponent>
    </div>
  )
}
