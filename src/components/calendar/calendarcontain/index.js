import React from 'react'
import './styles.scss'
import doctor from '../../../assets/doctorimg.png'
let CalenderContain = ({ appointments, handleChange, selected }) => {
    let backColors = {
        "Cita medica": "#3392bd",
        "Medicina": "#dabe36",
        "Retiro de resultados": "#279663",
    }
    return (
        <div className="calendar-contain-wrapper">
            <div className="left-calendar-contain">
                {
                    appointments.map((item) => {
                        return (
                            <div style={{ backgroundColor: backColors[item.type] }} onClick={() => handleChange(item)} key={item.id} className="card-calendar">
                                <div className="card-calendar-header">
                                    <div className="d-flex">
                                        <div className="calendar-day"><span>{new Date(item.dayAppointment).getDate()}</span></div>
                                        <span>{item.type}</span>
                                    </div>
                                    <span>{item.time}</span>
                                </div>
                                {
                                    selected &&
                                    selected.id === item.id &&
                                    <>
                                        <h3>{item.consult}</h3>
                                        <h4>{item.doctor}</h4>
                                    </>
                                }

                            </div>
                        )
                    })
                }
            </div>
            <div className="right-calendar-contain">
                {
                    selected &&
                    <>
                        <div className="consult-text">
                            <span className="consult-title">{selected.consult}</span>
                            <span className="time-title">{selected.time}</span>
                        </div>
                        <h3>{selected.doctor}</h3>
                        <h4>Ortopedista</h4>
                        <div className="doctor-info-calendar">
                            <img src={doctor} />
                            <div className="doctor-address">
                                <span>Quito</span>
                                <span>Dirección</span>
                                <span>646 5597</span>
                            </div>
                            <i className="fas fa-paper-plane" ></i>
                        </div>
                        <p>Qui veniam nostrud esse cupidatat anim adipisicing
                        aute eiusmod voluptate do nostrud ad exercitation
                        est. Laborum esse sunt aute fugiat do mollit eiusmod
                        amet sunt cillum. Tempor aute qui adipisicing fugiat ipsum non.
                        Reprehenderit magna duis aliqua eiusmod non labore.
                               </p>
                        <button>Reagendar cita</button>
                    </>
                }

            </div>
        </div>
    )
}
export default CalenderContain