import React, { Component } from 'react'
import ShowHistory from './ShowHistory/ShowHistory'
import ShowUserInfor from './ShowUserInfor/ShowUserInfor'

export default class UserInformation extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav>
                        <div className="nav nav-tabs container my-5" id="nav-tab" role="tablist">
                            <a className="nav-link active" id="nav-home-tab" data-toggle="tab" href="#userInfor" role="tab" aria-selected="true">THÔNG TIN THÀNH VIÊN</a>
                            <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="#historyBooking" role="tab" aria-selected="false">LỊCH SỬ ĐẶT VÉ</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <ShowUserInfor/>
                        <ShowHistory/>
                    </div>
                </div>

            </div>
        )
    }
}
