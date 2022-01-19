import { useParams, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUserByUserName } from '../services/firebase'
import * as ROUTES from '../constants/routes'
import Header from '../components/header'
import UserProfile from '../components/profile'

const Profile = () => {

    const { username } = useParams()
    const [ user,setUser ] = useState(null)
    const history = useHistory()
    
    useEffect(() => {
        async function checkUserExists(){
            const user = await getUserByUserName(username)
            // if doesUserExist.length > 0, it means you have a user (since it's an array)
            if(user.length > 0) {
                setUser(user[0])
            } else {
                history.push(ROUTES.NOT_FOUND)
            }
        }
        checkUserExists()
    },[username, history])

    return user?.username ? (
        <div className = 'bg-gray-background'>
            <Header/>
            <div className = 'mx-auto max-w-screen-lg'>
                <UserProfile user = {user}/>
            </div>
        </div>
    ) : null
}



export default Profile