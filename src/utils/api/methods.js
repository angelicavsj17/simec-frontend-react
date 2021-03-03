import instance from './instance';
const get = (path) => {
    let token = localStorage.getItem("token") || ""
    return instance.get(path, { headers: { Authorization: token } })
}

const post = (path, body) => {
    let token = localStorage.getItem("token") || ""
    return instance.post(path, body, { headers: { Authorization: token } });
}

const put = (path, body) => {
    let token = localStorage.getItem("token") || ""
    return instance.put(path, body, { headers: { Authorization: token } });
}

const remove = (path) => {
    let token = localStorage.getItem("token") || ""
    return instance.delete(path, { headers: { Authorization: token } });
}
const multipartPost = (path, body) => {
    let token = localStorage.getItem("token") || ""
    return instance.post(path, body, { headers: { Authorization: token, 'Content-type': 'multipart/form-data' } });
}
export default {
    get,
    post,
    put,
    remove,
    multipartPost
}