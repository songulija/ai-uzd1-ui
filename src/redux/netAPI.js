import axios from 'axios'

const netAPi = axios.create({
    baseURL: 'https://localhost:44373',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default netAPi