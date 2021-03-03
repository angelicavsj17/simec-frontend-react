import React, { useState } from 'react'
import './styles.scss'
import DownloadPdf from '../../../utils/downloadPdf';
import config from '../../../../config';
import { useDispatch } from 'react-redux';
import methods from '../../../utils/api/methods';
let Examscontent = ({ exams, loading, getOrders }) => {
    let dispatch = useDispatch()
    let getPdf = (id) => {
        DownloadPdf(`${config.api.url}reports/pedido/${id}`, dispatch)
    }
    let getPdfResult = (id) => {
        DownloadPdf(`${config.api.url}reports/Resultado/${id}`, dispatch)
    }
    let uploadOrderResult = ({ target }, PedidoID) => {
        if (target.files.length > 0) {
            let file = target.files[0]
            console.log(file)
            let body = new FormData()
            body.append('pdf', file);
            body.append('PedidoID', PedidoID);
            methods.multipartPost('orders/upload/order', body).then(({ data }) => {
                console.log(data)
                if (data.body.success) {
                    getOrders()
                }
            })
        }
    }
    return (
        <div className="doctors-container">
            <h4>Exámenes y pedidos</h4>
            <div className="d-block exams-list-wrapper">
                {/* header */}
                <div className="exams-container d-flex exams-th">
                    <div className="vertical-padding text-align-center border-right"><strong>Fecha</strong></div>
                    <div className="vertical-padding text-align-center border-right"><strong>Doctor</strong></div>
                    <div className="vertical-padding text-align-center border-right"><strong>Pedido</strong></div>
                    <div className="vertical-padding text-align-center border-right"><strong>Subir resultado</strong></div>
                    <div className="vertical-padding text-align-center"><strong>Resultado</strong></div>
                </div>
                {
                    loading ? <div className="loader"></div> : exams ? exams.length > 0 ? exams.map((item) => {
                        console.log(item.result)
                        return (
                            <div key={item.PedidoID} className="exams-container d-flex">
                                <div className="vertical-padding text-align-center border-right"><span className="exams-header2">Fecha: </span> {new Date(item.FechaPedido).toLocaleDateString()}</div>
                                <div className="vertical-padding text-align-center border-right"><span className="exams-header2">Doctor: </span> {item.Firstname} {item.LastName}</div>
                                <div className="vertical-padding text-align-center border-right"><span className="exams-header2">Pedido: </span><a onClick={() => getPdf(item.PedidoID)} target="_blank" className="td-none color-black down" download><i className="fas fa-download"></i> Descargar pdf</a></div>
                                {
                                    item.result ?
                                        <><div className="vertical-padding text-align-center border-right down"></div><div className="vertical-padding text-align-center"><span className="exams-header2">Resultado: </span><a onClick={() => getPdfResult(item.PedidoID)} target="_blank" className="td-none color-black down" download><i className="fas fa-download"></i> Descargar pdf</a></div> </> :
                                        <div onClick={() => document.getElementById('upload-result').click()} className="vertical-padding text-align-center border-right down"><span className="exams-header2">Subir resultado: </span><i className="fas fa-upload"></i> Subir Resultado: </div>
                                }
                                <input onChange={(e) => uploadOrderResult(e, item.PedidoID)} name="pdf" className="d-none" id="upload-result" type="file" />


                            </div>
                        )
                    }) : <p className="not-available">No tienes examenes disponibles</p>
                        : <p className="not-available">No tienes examenes disponibles</p>
                }
            </div>
        </div>
    )
}
export default Examscontent;