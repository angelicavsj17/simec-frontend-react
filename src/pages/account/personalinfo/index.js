import React, { useState } from 'react'
import { connect } from 'react-redux'
import PersonalInfoContent from '../../../components/account/personalinfocontent'
import SideBarContent from '../../../components/account/sidebarcontent'
import Sidebar from '../../../components/sidebar'
import data from '../../../utils/exampledata/data.json'
let PersonalInfo = ({ dispatch }) => {
    let [form, setform] = useState({
        name: "",
        user: "",
        email: "",
        phone: "",
        address: "",
        bloodType: "",
        citizen: "",
        gender: "",
        placeOfBirth: "",
        laterality: "",
        contactName: "",
        contactLastname: "",
        contactPhone: "",
        contactCity: "",
        contactRelationship: "",
        contactAddress: "",
    })
    let [selections, setselections] = useState({
        bloodTypes: data.bloodTypes,
        citizens: data.citizens,
        genders: data.genders,
        lateralities: data.lateralities,
    })
    let handleForm = ({ target }) => {
        setform({ ...form, [target.name]: target.value });
    }
    let onFormSubmit = () => {

    }
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <PersonalInfoContent onFormSubmit={onFormSubmit} form={form} handleForm={handleForm} selections={selections} />
        </>
    )
}
export default connect()(PersonalInfo);