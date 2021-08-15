import React from 'react'
import FirebaseContext from '../context/firebase'
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


const Login = () => {

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const { email, setEmail } = useState('')
    const { password, setPassword } = useState('')
    const { error, setError } = useState('')

    const isInvalid = password === '' || email === ''

    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = 'Login - Instagram'
    })


    return (
        <div>
            login page
        </div>
    )
}

export default Login