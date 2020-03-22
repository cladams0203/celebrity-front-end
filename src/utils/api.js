import axios from 'axios'

export default function api(){
    const token = localStorage.getItem('token')
    return axios.create({
            baseURL: 'https://celebrity-dead.herokuapp.com/api',
            headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
            }
    })
}