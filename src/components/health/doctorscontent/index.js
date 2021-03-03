import React from 'react'
import './styles.scss'
let DoctorContent = ({ options, searchDoctor, handleForm }) => {
    return (
        <div className="doctors-container">
            <h4>Mis médicos</h4>
            <div className="search-box">
                <div className="specialty-wrapper">
                    <div>
                        <span>Espacialidad</span>
                        <select onChange={handleForm} name="speciality">
                            {
                                options.specialitys.map((item, key) => {
                                    return <option key={item.EspecialidadID && item.EspecialidadID} value={item.Nombre && item.Nombre}>{item.Nombre && item.Nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="city-wrapper">
                    <div>
                        <span>Ciudad</span>
                        <select onChange={handleForm} name="city">
                            {
                                options.cities.map((item, key) => {
                                    return <option key={item.CiudadID && item.CiudadID}>{item.NombreCiudad}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={searchDoctor} className="search-button btn-sign-in">Buscar &nbsp;<i className="fas fa-search"></i></button>
        </div>
    )
}
export default DoctorContent;