import React from 'react'
import BackgroundImages from '../../../components/backgroundimages'
import Historycontent from '../../../components/health/historycontent'
import SideBarContent from '../../../components/health/sidebarcontent'
import Modal from '../../../components/modal'
import Sidebar from '../../../components/sidebar'
let History = () => {
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <BackgroundImages >
                <Modal>
                    <Historycontent />
                </Modal>
            </BackgroundImages>
        </>
    )
}
export default History;