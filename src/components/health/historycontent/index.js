import React from 'react'
import './styles.scss'
let Historycontent = () => {
    return (
        <div className="doctors-container">
            <h4>Antecedentes</h4>
            <div className="history-box">
                <div>
                    <div className="border-right d-block">
                        <h4>Familiar</h4>
                        <span className="d-block m-top"><strong>Patología:</strong>Diabetes</span>
                        <span className="d-block "><strong>Detalle:</strong>Madre con diabetes</span>
                    </div>
                    <div className="d-block">
                        <br />
                        <span className="d-block m-top"><strong>Patología:</strong>Enf. cardiovascular</span>
                        <span className="d-block "><strong>Detalle:</strong>Padre con Enf. cardiovascular</span>
                    </div>
                </div>
                <div className="border-top vertical-margin-padding">
                    <div className="border-right d-block">
                        <h4>Personales</h4>
                        <span className="d-block m-top border-bottom w-fitcontent">Antecedentes patológicos</span>
                        <br />
                        <span>varicela</span>
                        <br />
                        <span>sarampeon</span>
                    </div>
                    <div>
                        <br />
                        <span className="d-block m-top border-bottom w-fitcontent">Medicamentos</span>
                        <br />
                        <span>No consume medicamentos de uso prolongado</span>
                    </div>
                </div>
                <div className="border-top vertical-margin-padding w-fitcontent">
                    <div className="border-right d-block">
                        <span className="m-top d-block border-bottom w-fitcontent">Alergias y alertas</span>
                        <br />
                        <span>Alergia al polen</span>
                        <br />
                        <span>Alergia a los ácaros</span>
                    </div>
                    <div>
                        <span className="m-top d-block border-bottom w-fitcontent">Alergias famacológicas</span>
                        <br />
                        <span>Alergia a la insulina</span>
                    </div>
                </div>
                <div className="border-top vertical-margin-padding">
                    <div className="d-block">
                        <span className="m-top d-block">Cirugías</span>
                        <span>No se ha realizado cirugías</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Historycontent;