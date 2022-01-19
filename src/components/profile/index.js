import { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Photos from './photos'
import { getUserByUserName, getUserPhotosByUsername } from '../../services/firebase'

const reducer = (state, newState) => ({ ...state, ...newState})
const initialState = {
    profile: {},
    photosCollection: [],
    followerCount:0
}

const Profile = ({user}) => {

    const reducer = (state, newState) => ({ ...state, ...newState})
    const initialState = {
    profile: {},
    photosCollection: [],
    followerCount:0
    }

    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const getProfileInfoAndPhotos = async () => {
            const photos = await getUserPhotosByUsername(user.username)
            dispatch({profile:user, photosCollection: photos, followerCount: user.followers.length})
        }
        if(user.username){
            getProfileInfoAndPhotos()
        }
    },[user.username])

    return(
        <>
            <Header/>
            <Photos photos = {photosCollection}/>
            <p>Hello {user.username}</p>
        </>
    )
    
}

Profile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number.isRequired,
        emailAddress: PropTypes.string.isRequired,
        followers: PropTypes.array.isRequired,
        following: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired
}

export default Profile