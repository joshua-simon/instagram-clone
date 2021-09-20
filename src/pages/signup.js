import React from 'react'
import FirebaseContext from '../context/firebase'
import { useState, useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const SignUp = () => {

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [ username, setUsername]  = useState('')
    const [ fullName, setFullName]  = useState('')
    const [email, setEmailAddress] = useState('');
    const [ password, setPassword ]  = useState('')
    const [ error, setError ]  = useState('')

    const isInvalid = password === '' || email === ''

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {

        } catch(error) {

        }
    }

    useEffect(() => {
        document.title = 'Sign Up - Instagram'
    })

    return (
        <div className = "container flex mx-auto max-w-screen-md items-center h-screen">
            <div className = "flex w-3/5">
                <img src = '/images/iphone-with-profile.jpg'/>
            </div>
            <div className = "flex flex-col w-2/5">
                <h1 className = "flex justify-center w-full">
                    <img src = "/images/logo.png"/>
                </h1>
                {error && <p className ="mb-4 text-xs text-red-primary">{error}</p>}

            <form onSubmit = {handleSignUp}>
                <input
                    aria-label = "Enter your username"
                    type = "text"
                    placeholder = "Username"
                    className = "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-primary rounded mb-2"
                    onChange = { ({ target }) => setUsername(target.value)}
                />
                <input
                    aria-label = "Enter your full name"
                    type = "password"
                    placeholder = "Full name"
                    className = "text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border-gray-primary rounded mb-2"
                    onChange = { ({ target }) => setFullName(target.value)}
                />
                <input
                aria-label="Enter your email address"
                type="text"
                placeholder="Email address"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setEmailAddress(target.value)}
                value={email}
                />
                <input
                aria-label="Enter your password"
                type="password"
                placeholder="Password"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                />
                <button
                disabled = {isInvalid}
                type = "submit"
                className = {`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && ' opacity-50'}`}>
                Log In
                </button>
            </form>  
            </div>
            <div className = "flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
                <p className = 'text-sm'>
                    Have an account? {``}
                    <Link to = "/signup" className = "font-bold text-blue-medium">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
