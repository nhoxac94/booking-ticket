import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const withLayout = WrappedComponent => {
    return ({ component: Component, isPrivate, ...restProps }) => {
        const maLoaiNguoiDung = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))?.maLoaiNguoiDung
        if (isPrivate) {
            if (maLoaiNguoiDung === 'QuanTri') {
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
        }
        return <Redirect to="/" />
    }
}


export default withLayout;