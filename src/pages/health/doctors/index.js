import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BackgroundImages from '../../../components/backgroundimages';
import DoctorContent from '../../../components/health/doctorscontent';
import SideBarContent from '../../../components/health/sidebarcontent';
import Modal from '../../../components/modal';
import Sidebar from '../../../components/sidebar';
import methods from '../../../utils/api/methods'
let Doctors = () => {
    const history = useHistory();
    let [options, setoptions] = useState({
        specialitys: [],
        cities: [],
        speciality: "",
        city: "",
    })
    useEffect(() => {
        getUtils();
    }, [])
    let getUtils = async () => {
        let cities = await methods.get('utils/cities')
        let specialities = await methods.get('utils/specialities')
        setoptions({
            ...options,
            cities: cities.data.body,
            specialitys: specialities.data.body,
            city: cities.data.body.length > 0 ? cities.data.body[0] : "",
            speciality: specialities.data.body.length > 0 ? specialities.data.body[0] : "",
        })
    }
    let handleForm = ({ target }) => {
        if (target.name === "speciality")
            setoptions({ ...options, [target.name]: options.specialitys.find((e) => e.Nombre === target.value) });
        else
            setoptions({ ...options, [target.name]: options.cities.find((e) => e.NombreCiudad === target.value) });
    }
    let searchDoctor = () => {
        history.push(`/health/searchdoctors?speciality=${options.speciality.EspecialidadID}&city=${options.city.CiudadID}`);
    }
    return (
        <>
            <Sidebar>
                <SideBarContent />
            </Sidebar>
            <BackgroundImages >
                <Modal>
                    <DoctorContent searchDoctor={searchDoctor} handleForm={handleForm} options={options}>
                    </DoctorContent>
                </Modal>
            </BackgroundImages>
        </>
    )

}
export default Doctors;