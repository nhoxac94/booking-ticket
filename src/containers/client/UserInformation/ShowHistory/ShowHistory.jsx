import Loader from 'components/Loader/Loader';
import moment from 'moment';
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowHistory extends Component {
    render() {
        const { user, loading } = this.props;
        if (loading) return <Loader />
        const { thongTinDatVe } = user.data
        return (
            <div className="tab-pane fade container text-center" id="historyBooking" role="tabpanel" >
                <h2>Lịch sử đặt vé của bạn</h2>
                <p>Chúc bạn xem film vui vẻ</p>
                {thongTinDatVe ?
                    thongTinDatVe.map(datVe => {
                        return (
                            <div className="" key={datVe.maVe}>
                                <div className="card mb-3 mr-3" style={{ maxWidth: 500 }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                        <p className="card-text" style = {{fontSize : 20}}> {datVe.tenPhim}</p>
                                            <img src="..." alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card">
                                                <img className="card-img-top" src="" alt="" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{datVe.danhSachGhe[0].tenHeThongRap}</h4>
                                                    <p className="card-text">Ngày đặt : {moment(datVe.ngayDat).format("DD-MM-YYYY")}</p>                                                   
                                                    <p className="card-text"> Rạp số : {datVe.danhSachGhe[0].tenCumRap}</p>
                                                    <p className="card-text"> Số ghế : {datVe.danhSachGhe.reduce((total, ghe) => {
                                                        return total += ghe.tenGhe + " "
                                                    }, "")}</p>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })


                    : <div>Bạn chưa có lịch sử đặt vé</div>}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    user: state.updateInformationReducer.user,
    loading: state.updateInformationReducer.loading
})

export default connect(mapStateToProps)(ShowHistory)