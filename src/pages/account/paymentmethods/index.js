import React from 'react'
import PaymentMethodsContain from '../../../components/account/paymentmethods'
import SideBarContent from '../../../components/account/sidebarcontent'
import Sidebar from '../../../components/sidebar'
let PaymentMethods = () => {
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <PaymentMethodsContain />
        </>
    )
}
export default PaymentMethods