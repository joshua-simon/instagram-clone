import { memo } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

const User = ({ username, fullName }) => {
    return (
        !username || !fullName ? (
            <Skeleton count = {1} height = {61}/>
        )
        :
        (
            <Link to = {`/p/${username}`} className = 'grid grid-cols-4 gap-4 mb-6 items-center'>
                <div className = 'flex-items-center justify-between col-span-1'>
                    <img
                        className = 'rounded-full w-16 flex mr-3'
                        src = {`/images/avatars/${username}.jpg`}
                        alt = ''
                    />
                </div>
            </Link>
        )
    )

}

User.propTypes = {
    username: propTypes.string,
    fullName: propTypes.string
}

export default User