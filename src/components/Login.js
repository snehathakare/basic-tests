import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [error, setError] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        setUser(data)
    }
    return (
        <div>
            <h3 id="heading">Login form</h3>
            <div><input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} /></div>
            <div><input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} /></div>
            <span data-test-id="error"
                style={{ visibility: error ? "visible" : "hidden" }}
            >
                Something went wrong!
            </span>
            <div><button disabled={!username || !password} onClick={handleLogin}>Login</button></div>
        </div>
    )
}

export default Login