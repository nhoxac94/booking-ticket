import React, { Component } from 'react'

export default class ShowHistory extends Component {
    render() {
        return (
            <div className="tab-pane fade container text-center" id="historyBooking" role="tabpanel" >
                <h2>Lịch sử đặt vé của bạn</h2>
                <p>Chúc bạn xem film vui vẻ</p>
                <div className="row d-flex justify-content-center">
                    <div className="card mb-3 mr-3" style={{ maxWidth: 500 }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src="..." alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card">
                                    <img className="card-img-top" src="" alt = "" />
                                    <div className="card-body">
                                        <h4 className="card-title">Tên rạp</h4>
                                        <p className="card-text">Ngày đặt - giờ chiếu - số ghế</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
