import React from 'react'
import './FaqComponent.css'
import { faqsData } from '../../data/faqsData'
import TitleComponent from '../TitleComponent/TitleComponent'
import AccordionComponent from '../AccordionComponent/AccordionComponent'
export default function FaqComponent() {
  return (
    <div className='faq-main-container mx-162 mt-200' id='faq'>
      <TitleComponent heading={"Solutions For The Doubts"} title={"Frequently Asked Questions"}
        text={"Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."}
      />
      <div className="faq-cards mt-100">
        <div className='column-cards'>
          {faqsData.slice(0, Math.ceil(faqsData.length / 2)).map((faq, index) => (
            <AccordionComponent key={index} title={faq.question} content={faq.answer} />
          ))}
        </div>
        <div className='column-cards'>
          {faqsData.slice(Math.ceil(faqsData.length / 2)).map((faq, index) => (
            <AccordionComponent key={index + Math.ceil(faqsData.length / 2)} title={faq.question} content={faq.answer} />
          ))}
        </div>
        {/* separate the FAQ items into two columns so that if one item gets bigger (like when it's opened),
             it won't change the height of the items in the other column. */}

      </div>
    </div>
  )
}
