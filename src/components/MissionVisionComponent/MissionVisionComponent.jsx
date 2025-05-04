import React from 'react'
import './MissionVisionComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import MissionVisionCardComponent from '../MissionVisionCardComponent/MissionVisionCardComponent'
export default function MissionVisionComponent() {
  return (
    <div className='mx-162 MV-main-container'>
      <TitleComponent heading={'Mission & Visions'} title={'Our Mission & Visions'}
        text={'We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'}
      />
      <div className="MV-cards mt-100">
        <MissionVisionCardComponent id={'mission'} title={'Mission'} img={'/assets/icons/Mission.png'}
          description={'At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.'}
        />
        <MissionVisionCardComponent id={'vision'} title={'Vision'} img={'/assets/icons/Vision.png'}
          description={'Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.'}
        />
        {/* Note: data is passed directly as props instead of using a separate data file as I did in other sections
            because the content is static, used only once, and not expected to change or grow.
            This keeps the component simple and easy to maintain.
        */}
      </div>
    </div>
  )
}
