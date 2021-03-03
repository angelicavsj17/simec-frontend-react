import React, { useState } from 'react'
import BackgroundImagesHelp from '../../../components/help/backgroundimageshelp'
import FrequentQuestionsContain from '../../../components/help/frequentquestions'
import Sidebarcontent from '../../../components/help/sidebarcontent'
import Sidebar from '../../../components/sidebar'
let FrequentQuestions = () => {
    let [frequent, setfrequent] = useState([
        { id: 0, question: '¿Puedo cambiar mi forma de pago?', response: 'Culpa pariatur id officia aliquip dolore in cillum elit proident duis. Nulla est amet nostrud magna nulla. Elit nostrud excepteur est excepteur mollit eu aute eu cillum in.' },
        { id: 1, question: '¿Puedo cambiar mi forma de pago?', response: 'Culpa pariatur id officia aliquip dolore in cillum elit proident duis. Nulla est amet nostrud magna nulla. Elit nostrud excepteur est excepteur mollit eu aute eu cillum in.' },
        { id: 2, question: '¿Puedo cambiar mi forma de pago?', response: 'Culpa pariatur id officia aliquip dolore in cillum elit proident duis. Nulla est amet nostrud magna nulla. Elit nostrud excepteur est excepteur mollit eu aute eu cillum in.' },
    ]);
    return (
        <>
            <Sidebar>
                <Sidebarcontent />
            </Sidebar>
            <BackgroundImagesHelp>
                <FrequentQuestionsContain frequent={frequent} />
            </BackgroundImagesHelp>
        </>
    )
}
export default FrequentQuestions