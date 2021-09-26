import React, { Component } from 'react'
import ShowHistory from './ShowHistory/ShowHistory'
import ShowUserInfor from './ShowUserInfor/ShowUserInfor'
import './UserInformation.scss'
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type'
import Header from 'components/Header/Header'

export default class UserInformation extends Component {

    render() {
        if (!JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))) {
            this.props.history.push("/")
        }
        return (

            <div className="wrappedUser" style={{ minHeight: "100vh" }}>
                <div className=" container">
                    <div className="navbar__user">
                        <nav>
                            <div className="nav nav-tabs container" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#userInfor" role="tab" aria-selected="true">THÔNG TIN THÀNH VIÊN</a>
                                <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#historyBooking" role="tab" aria-selected="false">LỊCH SỬ ĐẶT VÉ</a>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <ShowUserInfor />
                            <ShowHistory />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



