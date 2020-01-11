import axios from 'axios'
let request = axios.create()
request.defaults.headers['token'] = localStorage.getItem('token')
export default request
