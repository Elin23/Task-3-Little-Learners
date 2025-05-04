import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { learningData } from '../../data/learningData'
import LearningCardComponent from '../learningCardComponent/learningCardComponent'
import './LearningSectionComponent.css'
export default function LearningSectionComponent() {
  return (
    <div className='mx-162' id='learning'>
        <TitleComponent heading={"Our Features"} title={"What Students Learn"} 
                        text={"At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"}
        />
        <div className="learning-cards mt-100">
            {
                learningData.map((learning, index) => (
                    <LearningCardComponent img={learning.img} label={learning.label} description={learning.description}/>
                ))
            }
        </div>
    </div>
  )
}
