import React from 'react'
import './styles.scss'
import receipt from '../../../assets/example/pedido.pdf'
import invoice from '../../../assets/example/resultado.pdf'
import { useDispatch } from 'react-redux'
import DownloadPdf from '../../../utils/downloadPdf'
import config from '../../../../config'
import methods from '../../../utils/api/methods'
let ReceiptContent = ({ receipts, loading, getRecipes }) => {
    let dispatch = useDispatch()
    let getPdf = (id) => {
        DownloadPdf(`${config.api.url}reports/receta/${id}`, dispatch)
    }
    let getPdfInvoid = (id) => {
        DownloadPdf(`${config.api.url}reports/Facturas/${id}`, dispatch)
    }
    let uploadInvoice = ({ target }, PrescriptionID) => {
        if (target.files.length > 0) {
            let body = new FormData();
            body.append('pdf', target.files[0])
            body.append('PrescriptionID', PrescriptionID)
            methods.multipartPost('recipes/upload/invoid', body).then(({ data }) => {
                console.log(data)
                if (data.body.success) {
                    getRecipes()
                }
            })
        }
    }
    return (
        <div className="doctors-container">
            <h4>Recetas</h4>
            <div className="receipts-list-wrapper d-block">
                <div className="d-flex receipts-th">
                    <div className="receipts-column border-right"><strong>Fecha</strong></div>
                    <div className="receipts-column border-right"><strong>Médico</strong></div>
                    <div className="receipts-column border-right"><strong>Receta</strong></div>
                    <div className="receipts-column border-right"><strong>Subir Factura</strong></div>
                    <div className="receipts-column border-right"><strong>Factura</strong></div>
                </div>
                {
                    loading ? <div className="loader"></div> : receipts ? receipts.length > 0 ? receipts.map((item) => {
                        return (
                            <div key={item.PrescriptionID} className="receipt-container">
                                <div className="receipts-column border-right"><strong className="receipt-th2">Fecha:</strong><span>{new Date(item.PrescriptionDate).toLocaleDateString()}</span></div>
                                <div className="receipts-column border-right"><strong className="receipt-th2">Médico:</strong><span>{item.Firstname} {item.LastName}</span></div>
                                <div className="receipts-column border-right">
                                    <strong className="receipt-th2">Receta:</strong>
                                    <a onClick={() => getPdf(item.PrescriptionID)} target="_blank" className="td-none color-black down" download="">
                                        <i className="fas fa-download">
                                        </i> Descargar pdf
                                    </a>
                                </div>
                                {
                                    item.invoid ?
                                        <>
                                            <div className="receipts-column border-right"></div>
                                            <div className="receipts-column border-right">
                                                <strong className="receipt-th2">Factura:</strong>
                                                <a onClick={() => getPdfInvoid(item.PrescriptionID)} target="_blank" className="td-none color-black down" download="">
                                                    <i className="fas fa-download">
                                                    </i> Descargar pdf
                                                </a>
                                            </div> </> :
                                        <><input onChange={(e) => uploadInvoice(e, item.PrescriptionID)} className="d-none" id="upload-invoice" type="file" />
                                            <div onClick={() => document.getElementById('upload-invoice').click()} className="receipts-column border-right down"><span className="exams-header2">Subir Factura: </span><i className="fas fa-upload"></i> Subir Factura: </div></>
                                }
                            </div>
                        )
                    }) : <p className="not-available">No tienes recetas disponibles</p>
                        : <p className="not-available">No tienes recetas disponibles</p>
                }
            </div>
        </div>
    )
}
export default ReceiptContent;