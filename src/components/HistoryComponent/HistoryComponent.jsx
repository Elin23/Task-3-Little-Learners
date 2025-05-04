import React from 'react'
import './HistoryComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import BaseContainerComponent from '../BaseContainerComponent/BaseContainerComponent'
import { historyData } from '../../data/history'
import HistoryCardComponent from '../HistoryCardComponent/HistoryCardComponent'
export default function HistoryComponent() {
    return (
        <div className='history-container mx-162' id='history'>
            <TitleComponent heading={"Our Progressive Journey"} title={"Our History"}
                text={"Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"}
            />
            <div className="mt-100">
                <BaseContainerComponent className='history' data_aos={"fade"}>
                    <div className="all-history">
                        {
                            historyData.map((history, index) => (
                                <HistoryCardComponent year={history.year} label={history.label} description={history.description} />
                            ))
                        }
                    </div>
                </BaseContainerComponent>
            </div>
        </div>
    )
}
