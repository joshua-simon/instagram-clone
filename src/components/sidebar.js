import React from 'react'
import useUser from '../hooks/use-user'

const Sidebar = () => {
    const { 
        user : { fullName, username, userId}
     } = useUser()
     console.log('fullname, username, userId', fullName, username, userId)
    return(
        <div>
            I am the Sidebar
        </div>
    )
}

export default Sidebar