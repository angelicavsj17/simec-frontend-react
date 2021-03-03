import React, { useEffect, useState } from 'react'
import Sidebar from '../../../components/sidebar'
import BackgroundImages from '../../../components/backgroundimages'
import Modal from '../../../components/modal'
import ReceiptContent from '../../../components/health/receiptcontent'
import SideBarContent from '../../../components/health/sidebarcontent'
import methods from '../../../utils/api/methods'
let Receipt = () => {
    let [receipts, setreceipts] = useState([]);
    let [loading, setloading] = useState(true);
    useEffect(() => {
        getRecipes()
    }, [])
    let getRecipes = () => {
        methods.get("recipes/get").then((data) => {
            console.log(data.data.body);
            setreceipts(data.data.body);
            setloading(false)
        })
    }
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <BackgroundImages>
                <Modal>
                    <ReceiptContent getRecipes={getRecipes} loading={loading} receipts={receipts} />
                </Modal>
            </BackgroundImages>
        </>
    )
}
export default Receipt;