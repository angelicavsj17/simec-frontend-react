const DownloadPdf = (url, dispatch) => {
    var xhr = new XMLHttpRequest();
    let token = localStorage.getItem("token") || ""
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.setRequestHeader('Authorization', token)
    xhr.onload = function (e) {
        console.log()
        if(e.currentTarget.status === 500){
            dispatch({
                type: 'ADD_ERROR',
                payload: { errors: 'Este archivo no existe' }
            })
        }
        if (this.status == 200) {
            var blob = new Blob([this.response], { type: "application/pdf" });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "Report_" + new Date().getTime() + ".pdf";
            link.click();
        }
    };
    xhr.send();
}
export default DownloadPdf