import React, { useEffect, useState } from 'react'
import './styles.scss'
import Doctor from '../../../assets/doctorimg.png'
import { Link } from 'react-router-dom';
let SearchDoctorsContent = ({ doctors, doctor, setdoctor, loading }) => {
    let [templateColumns, settemplateColumns] = useState(doctors.length);
    let [columns, setcolumns] = useState(0);
    let scrollDoctors = (sign) => {
        let element = document.getElementById("doctors-container-list");
        let sLeft = element.scrollLeft;
        let width = element.clientWidth;
        element.scroll({
            left: sign === "+" ? sLeft += width : sLeft -= width,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        let widthChanged = (e) => {
            let width = document.body.clientWidth;
            if (width > 1300) setcolumns(4)
            else if (width > 900 && width <= 1300) setcolumns(2)
            else if (width > 500 && width <= 900) setcolumns(1)
            else setcolumns(1);
            let doctorsContainerList = document.getElementById('doctors-container-list');
            if (doctorsContainerList) {
                let left = doctorsContainerList.offsetLeft
                let clientWidth = doctorsContainerList.clientWidth
                console.log(left, clientWidth)
            }
        }
        widthChanged()
        window.addEventListener('resize', widthChanged)
        return (() => { window.removeEventListener('resize', widthChanged) })
    }, [])
    useEffect(() => {
        settemplateColumns(doctors.length);
    }, [doctors])
    return (
        <div className="doctors-container" >
            <h4>Mis médicos</h4>
            <Link className="td-none color-black" to="/health/doctors"><i className="fas fa-search search-right-top f-1-5em"></i></Link>
            {
                loading ? <div className="loader"></div> :
                    doctors.length > 0 ? <>
                        <div className="doctors-list-static">
                            <div id="doctors-container-list" className="doctors-container-list">
                                <div className="doctors-list" style={{ gridTemplateColumns: `repeat(${templateColumns},1fr)`, width: `${templateColumns / columns * 100}%` }}>
                                    <i onClick={() => scrollDoctors("-")} className="fas fa-chevron-left doctor-chevron-left"></i>
                                    {
                                        doctors.map((item) => {
                                            return <div onClick={() => setdoctor(item)} className="doctor-list-item" key={item.UserID}>
                                                <img className={doctor.UserID === item.UserID ? "doctor-active" : ""} src={item.UrlImagen ? item.UrlImagen : Doctor} />
                                            </div>
                                        })
                                    }
                                    <i onClick={() => scrollDoctors("+")} className="fas fa-chevron-right doctor-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="doctor-info pad-1em-800">
                            <div className="doctor-name-desc">
                                <h5 className="text-align-start-800">{doctor.FirstName} {doctor.LastName}</h5>
                                <h3 className="text-align-start-800">{doctor.Nombre}</h3>
                            </div>
                            <div className="doctor-icons">
                                <a target="_blanked" href={`mailto:${doctor.Email}`}><i className="fas fa-paper-plane"></i></a>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>
                        <div className="justify-content-between doctor-info pad-1em-800 doctor-info2">
                            <h5 className="f-1-5em fw-400">{doctor.NombreCiudad}</h5>
                            <h5 className="f-1-5em fw-400">{doctor.DireccionMatriz}</h5>
                            <h5 className="f-1-5em fw-400">{doctor.Mobile}</h5>
                        </div>
                        <p className="pad-1em-800">{doctor.description}</p>
                        <a target='_blank' href='https://www.doctorisy.com/ecuador/medicos/' className='schedule-appointment-button'>
                            <button>Agendar cita</button>
                        </a>
                    </> :
                        <>
                            <br />
                            <p>No encontramos doctores</p>
                        </>
            }
        </div >
    )
}
export default SearchDoctorsContent;