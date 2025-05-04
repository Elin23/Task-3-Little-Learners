import React from 'react'
import './TeamComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { TeamData } from '../../data/TeamData'
import TeamCardComponent from '../TeamCardComponent/TeamCardComponent'
export default function TeamComponent() {
    return (
        <div className='mx-162 team-container' id='team'>
            <TitleComponent heading={"Our Teachers With Experties"} title={"Our Team Members"}
                text={"At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."}
            />
            <div className="team-cards mt-100">
                {
                    TeamData.map((member, index) => (
                        <TeamCardComponent img={member.member_img} name={member.name} qualification={member.qualification} description={member.description} />
                    ))
                }
            </div>
        </div>
    )
}
