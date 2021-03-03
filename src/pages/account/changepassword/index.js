import React from 'react'
import ChangePasswordContain from '../../../components/account/changepassword'
import SideBarContent from '../../../components/account/sidebarcontent'
import Sidebar from '../../../components/sidebar'
let ChangePassword = () => {
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <ChangePasswordContain />
        </>
    )
}
export default ChangePassword