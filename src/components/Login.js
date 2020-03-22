import React, { useState } from 'react'
import api from '../utils/api'

export function Login() {

    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        api().post('/users/login', form)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => console.log(err))
    }
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                name='username'
                value={form.username}
                placeholder='Username'
                onChange={(e) => handleChange(e)}
            />
            <input
                name='password'
                value={form.password}
                placeholder='Password'
                onChange={(e) => handleChange(e)}
                type='password'
            />
            <button type='submit'>Login</button>
        </form>
    )
}