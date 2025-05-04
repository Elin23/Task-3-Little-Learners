import React from 'react'
import SubHeroComponent from '../components/SubHeroComponent/SubHeroComponent'
import MissionVisionComponent from '../components/MissionVisionComponent/MissionVisionComponent'
import AwardsComponent from '../components/AwardsComponent/AwardsComponent'
import TeamComponent from '../components/TeamComponent/TeamComponent'
import HistoryComponent from '../components/HistoryComponent/HistoryComponent'

export default function About() {
  return (
    <main>
      <SubHeroComponent title={"Welcome to Little Learners Academy"} 
                        text={"A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."}
                        link_label={"Overview"}
      />
      <MissionVisionComponent/>
      <AwardsComponent/>
      <HistoryComponent/>
      <TeamComponent/>
    </main>
  )
}
