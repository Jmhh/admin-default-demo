import axios from 'axios'

const http = axios.create({
    timeout: 10000
})

http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)


export default http