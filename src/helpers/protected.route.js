//If user is logged in, allow them to get to certain routes, if not logged in, don't allow them

import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

const ProtectedRoute = ({ user, children, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {({ location }) => {
                if(user){
                    return children
                }

                if(!user){
                    return (
                        <Redirect
                        to = {{
                            pathname: ROUTES.LOGIN,
                            state: { from: location }
                        }}
                        />
                    )
                }
                return null
            }}
        />
    )
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired
}

export default ProtectedRoute