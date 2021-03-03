import React, { useEffect, useState } from 'react'
import BackgroundImages from '../../../components/backgroundimages'
import ConsultationsContent from '../../../components/health/consultationscontent'
import SideBarContent from '../../../components/health/sidebarcontent'
import Modal from '../../../components/modal'
import Sidebar from '../../../components/sidebar'
import data from '../../../utils/exampledata/data.json'
import methods from '../../../utils/api/methods'
let Consultations = () => {
    let [consultations, setconsultations] = useState([]);
    let [loading, setloading] = useState(true);
    useEffect(() => {
        methods.get('soap/get').then((response) => {
            console.log(response.data.body)
            setconsultations(new Array(...response.data.body))
            setloading(false)
        }).catch(() => setloading(false))
    }, [])
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <BackgroundImages>
                <Modal>
                    <ConsultationsContent loading={loading} consultations={consultations} />
                </Modal>
            </BackgroundImages>
        </>
    )
}
export default Consultations;