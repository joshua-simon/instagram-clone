import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

const Header = () => {
    const [ isFollowingProfile, setIsFollowingProfile ] = useState(false)
    return(
        <div>
            I am the header
        </div>
    )
}

export default Header