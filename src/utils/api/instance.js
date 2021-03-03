import axios from 'axios'
import config from '../../../config';
let token = localStorage.getItem("token") || "";
const instance = axios.create({
    baseURL: config.api.url,
    headers: {
        "Content-type": "application/json",
        "Authorization": `${token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
    }
});
export default instance;