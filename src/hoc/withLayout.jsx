import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const withLayout = WrappedComponent => {
    return ({ component: Component, isPrivate, ...restProps }) => {
        const maLoaiNguoiDung = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))?.maLoaiNguoiDung
        const handleRender = () => {
            return (
                <Route
                    {...restProps}
                    render={routeProps => (
                        <WrappedComponent>
                            <Component {...routeProps} />
                        </WrappedComponent>
                    )}
                />
            )
        }
        if (isPrivate) {
            if (maLoaiNguoiDung === 'QuanTri') {
                return (handleRender())
            }
            return <Redirect to="/" />
        } else {
            return (handleRender())
        }

    }
}


export default withLayout;