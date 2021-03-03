import React from 'react'
import { useDispatch } from 'react-redux'
import config from '../../../../config'
import DownloadPdf from '../../../utils/downloadPdf'
import './styles.scss'

let ConsultationsContent = ({ consultations, loading }) => {
    let actions = ["Pedido", "Receta", "Certificado", "Facturas"]
    let dispatch = useDispatch()
    let downloadStreamFile = (action, soapid, date) => {
        DownloadPdf(`${config.api.url}reports/${action}/${soapid}/${date}`, dispatch)
    }
    return (
        <div className="doctors-container">
            <h4>Historial de consultas y diagnósticos</h4>
            <div className="consultations-list-wrapper d-block">
                <div className="d-flex consulation-th">
                    <div className="consultation-column border-right"><strong>Fecha</strong></div>
                    <div className="consultation-column border-right"><strong>Doctor</strong></div>
                    <div className="consultation-column border-right"><strong>Especialidad</strong></div>
                    <div className="consultation-column border-right"><strong>Diagnóstico</strong></div>
                    <div className="consultation-column"><strong>Acción</strong></div>
                </div>
                {
                    loading ? <div className="loader"></div> : consultations ? consultations.length > 0 ? consultations.map((item) => {
                        return (
                            <div key={item.soapid} className="consultation-container">
                                <div className="consultation-column border-right"><strong className="consulation-th2">Fecha:</strong><span>{new Date(item.SoapDate).toLocaleDateString()}</span></div>
                                <div className="consultation-column border-right"><strong className="consulation-th2">Doctor:</strong><span>{item.Firstname} {item.LastName}</span></div>
                                <div className="consultation-column border-right"><strong className="consulation-th2">Especialidad:</strong><span>{item.Nombre}</span></div>
                                <div className="consultation-column border-right"><strong className="consulation-th2">Diagnóstico:</strong><span>{item.descriptor}</span></div>
                                <div className="consultation-column flex-wrap-wrap d-flex">
                                    <strong className="consulation-th2">Acción:</strong>
                                    {
                                        actions.map((action) => {
                                            console.log(item)
                                            if (
                                                action === 'Pedido' && item.PedidoID ||
                                                action === 'Receta' && item.PrescriptionID ||
                                                action === 'Certificado' && item.CertificadoID ||
                                                action === 'Facturas' && item.invoid)
                                                return (
                                                    <a key={action} onClick={(e) => { e.preventDefault(); downloadStreamFile(action, item.soapid, item.SoapDate.split('T')[0]) }} download href="#">
                                                        <span className="consultation-action-button">{action}</span>
                                                    </a>
                                                )
                                        }
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }) : <p className="not-available">No tienes consultas</p>
                        : <p className="not-available">No tienes consultas</p>
                }
                {
                    // Object.entries(consults).map(([key, item]) => {
                    //     console.log(item)
                    //     if (typeof (item) === "string")
                    //         return <div>{key}: {item}</div>
                    // })
                }
            </div>
        </div>
    )
}
export default ConsultationsContent;