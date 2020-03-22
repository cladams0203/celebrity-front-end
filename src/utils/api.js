import axios from 'axios'

export default function api(){
    axios.create({
        baseURL: 'https://celebrity-dead.herokuapp.com',
        headers: {
            authorization: localStorage.getItem('token'),
            contentType: 'application/json'
        }
    })
}