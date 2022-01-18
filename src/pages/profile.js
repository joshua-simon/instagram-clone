import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUserByUserName } from '../services/firebase'
import * as ROUTES from '../constants/routes'

const Profile = () => {

    const { username } = useParams()
    const [ userExists,setUserExists ] = useState(undefined)
    const [ user,setUser ] = useState(null)
    const history = useHistory()
    
    useEffect(() => {
        const checkUserExists = async () => {
            const user = await getUserByUserName(username)
            // if doesUserExist.length > 0, it means you have a user (since it's an array)
            if(user.length > 0) {
                setUser(user)
                setUserExists(true)
            } else {
                setUserExists(false)
                history.pushState(ROUTES.NOT_FOUND)
            }
        }
        checkUserExists()
    },[username, history])

    return userExists ? (
        <div className = 'bg-gray-background'>
            <div className = 'mx-auto max-w-screen-lg'>{username}</div>
        </div>
    ) : null
}

export default Profile