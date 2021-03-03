import React from 'react'
import InsurancesContain from '../../../components/account/insurances'
import SideBarContent from '../../../components/account/sidebarcontent'
import Sidebar from '../../../components/sidebar'
let Insurances = () => {
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <InsurancesContain />
        </>
    )
}
export default Insurances