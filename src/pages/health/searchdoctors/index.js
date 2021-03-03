import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import BackgroundImages from '../../../components/backgroundimages';
import SearchDoctorsContent from '../../../components/health/searchdoctorcontent';
import SideBarContent from '../../../components/health/sidebarcontent';
import Modal from '../../../components/modal';
import Sidebar from '../../../components/sidebar';
import data from '../../../utils/exampledata/data.json'
import methods from '../../../utils/api/methods'
let SearchDoctors = () => {
    let location = useLocation();
    // let dataFiltered = data.doctors.filter((e) =>)
    let [doctors, setdoctors] = useState([]);
    let [doctor, setdoctor] = useState({});
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const speciality = params.get("speciality");
        const city = params.get("city");
        methods.get(`doctors/${city}/${speciality}/get`).then(({ data }) => {
            console.log(data.body, "this is data")
            if (data.body.length > 0) {
                setdoctors(data.body);
                setdoctor(data.body[0])
            }
            setLoading(false)
        })
    }, [location])
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <BackgroundImages >
                <Modal>
                    <SearchDoctorsContent loading={loading} setdoctor={setdoctor} doctor={doctor} doctors={doctors}>
                    </SearchDoctorsContent>
                </Modal>
            </BackgroundImages>
        </>
    )
}
export default SearchDoctors;