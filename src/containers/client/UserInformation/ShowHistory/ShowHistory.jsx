import Loader from 'components/Loader/Loader';
import moment from 'moment';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Tag} from 'antd';
const { Column } = Table;


class ShowHistory extends Component {
    render() {
        const { user, loading } = this.props;
        if (loading) return <Loader />
        const { thongTinDatVe } = user
        const data = thongTinDatVe.map ((infor, idx) => {
            return ({
                key: idx + 1,
                movie: infor.tenPhim,
                theater: infor.danhSachGhe[0].tenHeThongRap,
                date: moment(infor.ngayDat).format("DD-MM-YYYY"),
                theaterDetail: infor.danhSachGhe[0].tenCumRap,
                seatPlan: infor.danhSachGhe.map(ghe => {
                    return ghe.tenGhe
                })
            })
        
        })
        return (
            <div className="tab-pane fade container text-center" id="historyBooking" role="tabpanel" >
                <h2>Lịch sử đặt vé của bạn</h2>
                <p>Chúc bạn xem film vui vẻ</p>
                <Table dataSource={data}>
                    <Column title="#" dataIndex="key" key="age" />
                    <Column title="Phim" dataIndex="movie" key="age" />
                    <Column title="Rạp" dataIndex="theater" key="age" />
                    <Column title="Ngày đặt" dataIndex="date" key="age" />
                    <Column title="Rạp số" dataIndex="theaterDetail" key="age" />
                    <Column
                        title="Ghế ngồi"
                        dataIndex="seatPlan"
                        key="tags"
                        render={setPlans => (
                            <>
                                {setPlans.map(seat => (
                                    <Tag color="blue" key={seat}>
                                        {seat}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    
                </Table>,
                
                </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.informationReducer.user,
    loading: state.informationReducer.loading
})

export default connect(mapStateToProps)(ShowHistory)