import React, { useState } from 'react'
import BackgroundImages from '../../components/backgroundimages'
import CalenderContain from '../../components/calendar/calendarcontain'
import SideBarContain from '../../components/calendar/sidebarcontain'
import Modal from '../../components/modal'
import Sidebar from '../../components/sidebar'
let Calendar = () => {
    let [appointments, setappointments] = useState([
        { id: 0, type: "Cita medica", dayAppointment: 1608655000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
        { id: 1, type: "Medicina", dayAppointment: 1608354000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
        { id: 2, type: "Retiro de resultados", dayAppointment: 1608354000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
        { id: 3, type: "Retiro de resultados", dayAppointment: 1608354000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
        { id: 4, type: "Retiro de resultados", dayAppointment: 1608354000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
        { id: 5, type: "Retiro de resultados", dayAppointment: 1608354000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
        { id: 6, type: "Retiro de resultados", dayAppointment: 1608354000000, consult: "Consulta general", doctor: "Carlos Eduardo Orozco", time: "4:00 pm" },
    ])
    let [selected, setSelected] = useState(null);
    let handleChange = (item) => {
        setSelected(item)
    }
    return (
        <>
            <Sidebar>
                <SideBarContain appointments={appointments} />
            </Sidebar>
            <BackgroundImages>
                <Modal>
                    <CalenderContain selected={selected} handleChange={handleChange} appointments={appointments} />
                </Modal>
            </BackgroundImages>
        </>
    )
}
export default Calendar