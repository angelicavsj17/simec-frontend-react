import React, { useEffect, useState } from 'react'
import BackgroundImages from '../../../components/backgroundimages';
import Examscontent from '../../../components/health/examscontent';
import SideBarContent from '../../../components/health/sidebarcontent';
import Modal from '../../../components/modal';
import Sidebar from '../../../components/sidebar';
import methods from '../../../utils/api/methods';
import data from '../../../utils/exampledata/data.json'
let Exams = () => {
    let [exams, setexams] = useState([]);
    let [loading, setloading] = useState(true);
    useEffect(() => {
        getOrders()
    }, [])
    let getOrders = () => {
        methods.get("orders/get").then((response) => {
            setexams(response.data.body)
            setloading(false)
        }, [])
    }
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <BackgroundImages >
                <Modal>
                    <Examscontent getOrders={getOrders} loading={loading} exams={exams} />
                </Modal>
            </BackgroundImages>
        </>
    )
}
export default Exams;