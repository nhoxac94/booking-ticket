import React, { Component } from "react";
import "./SeatDetail.scss";

import Loader from "components/Loader/Loader";
import { UserOutlined } from "@ant-design/icons";
import movieApi from "apis/movieApi";
import { USER_BOOKING_TICKET_LOGIN } from "containers/shared/Auth/module/type";
import moment from "moment";

export default class SeatDetail extends Component {
  state = {
    bookingSeat: [],
    seatPlan: [],
    tongTienVe: 0,
    gheVip: 0,
    gheThuong: 0,
    loading: true,
    timeOut: 95,
    clearTimer: null,
  };

  componentDidMount() {
    const { maLichChieu } = this.props.match.params;
    movieApi
      .fetchDetailSeat(maLichChieu)
      .then((res) => {
        this.setState({
          seatPlan: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
      });

    let startCountdown = (second) => {
      let counter = second;

      let timer = setInterval(() => {
        counter--;
        this.setState({
          timeOut: counter,
          clear: timer,
        });
        if (this.state.timeOut === 0) {
          clearInterval(timer);
          if (counter === 0) {
            alert("Đã hết giờ đặt vé, bạn sẽ quay trở về trang trước");
            this.props.history.goBack();
          }
        }
      }, 1000);
    };
    startCountdown(this.state.timeOut);
  }

  componentWillUnmount() {
    clearInterval(this.state.clearTimer);
  }
  /**
   * Hàm chọn ghế
   */
  chooseSeat(e, maGhe, giaVe, loaiGhe, daDat) {
    e.preventDefault();
    const ghe = "ghe";
    const gheVip = "gheVip";
    const gheCuaBan = "gheCuaBan";
    let isBooking = false;
    if (daDat) {
      alert("Ghế đã có người đặt, vui lòng chọn ghế khác!");
      return;
    }
    if (this.state.bookingSeat.length > 0) {
      isBooking = this.checkSeat(maGhe, this.state.bookingSeat);
    }
    if (!isBooking) {
      e.target.className = ghe + " " + gheCuaBan;
      this.setState(
        {
          // sử dụng concat để ghép từng obj vào mảng bookingSeat
          bookingSeat: this.state.bookingSeat.concat({
            maGhe,
            giaVe,
            loaiGhe,
            daDat: true,
          }),
        },
        () => {
          this.calcMoney(this.state.bookingSeat);
        }
      );
    } else {
      this.removeArr(maGhe, this.state.bookingSeat);
      if (loaiGhe === "Thuong") {
        e.target.className = ghe;
      } else if (loaiGhe === "Vip") {
        e.target.className = ghe + " " + gheVip;
      }
    }
  }

  /**
   * Hàm kiểm tra ghế xem có đặt hay chưa?
   * Nếu rồi thì return true để validation bên trên
   * Nếu chưa thì sẽ return false để chạy xuống hàm setState
   */
  checkSeat(_maGhe, bookingSeat) {
    return Boolean(
      bookingSeat.find((seats) => {
        if (seats.maGhe === _maGhe && seats.daDat) return true;
      })
    );
  }

  /**
   * Hàm xoá chỗ ngồi ra khỏi object array
   */
  removeArr(maGhe, bookingSeat) {
    let idxSeat = bookingSeat.findIndex((seats) => {
      return seats.maGhe === maGhe && seats.daDat;
    });
    const newBookingSeat = bookingSeat.splice(0, idxSeat);
    this.setState(
      {
        bookingSeat: newBookingSeat,
      },
      () => {
        this.calcMoney(newBookingSeat);
      }
    );
  }

  /**
   * Hàm tính tiền và tính tổng số ghế
   */
  calcMoney(bookingSeat) {
    let gheThuong = 0;
    let gheVip = 0;
    bookingSeat.map((seats) => {
      if (seats.loaiGhe === "Thuong") {
        gheThuong++;
      }
      if (seats.loaiGhe === "Vip") {
        gheVip++;
      }
    });
    let totalMoney = bookingSeat.reduce((total, curr) => {
      return total + curr.giaVe;
    }, 0);
    this.setState({
      gheThuong: gheThuong,
      gheVip: gheVip,
      tongTienVe: totalMoney,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.bookingSeat.length === 0) {
      alert("Bạn chưa đặt ghế nào");
    } else {
      alert("Bạn đã đặt ghế thành công\n Quay trở lại trang chủ");
      clearInterval(this.state.clearTimer);
      this.props.history.push("/");
    }
  };

  render() {
    const { loading, seatPlan, bookingSeat, tongTienVe } = this.state;
    const { thongTinPhim } = seatPlan;
    if (!JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))) {
      alert('Bạn phải đăng nhập mới sử dụng được chức năng đặt vé')
      this.props.history.push("/");
    }
    if (loading === true) return <Loader />;
    const { email, soDT } = JSON.parse(
      localStorage.getItem(USER_BOOKING_TICKET_LOGIN)
    );
    const { diaChi, gioChieu, ngayChieu, tenCumRap, tenPhim, tenRap } =
      thongTinPhim;
    return (
      <div className="seatdetail text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 shapeTheater__wrap">
              <div className="shapeTheater">
                <div style={{ border: "solid 5px #000" }} />
                <div id="trapezoid" className="text-center">
                  Màn hình
                </div>
              </div>

              <div className="seatPlan text-center">
                {this.state.seatPlan.danhSachGhe.map((ghe, index) => {
                  const { maGhe, giaVe, loaiGhe, daDat } = ghe;
                  let gheVip = "";
                  let gheDangDat = "";
                  let gheDaDat = "";
                  if (ghe.loaiGhe === "Vip") gheVip = "gheVip";
                  if (ghe.daDat) gheDaDat = "gheDaDat";
                  return (
                    <>
                      <button
                        key={maGhe}
                        className={`ghe ${gheVip} ${gheDaDat} `}
                        onClick={(e) =>
                          this.chooseSeat(e, maGhe, giaVe, loaiGhe, daDat)
                        }
                      >
                        {ghe.daDat ? "x" : ghe.tenGhe}
                      </button>
                      {(index + 1) % 16 === 0 ? <br /> : ""}
                    </>
                  );
                })}
              </div>
              <div
                className="footerTheater text-center"
                style={{ width: "60%", margin: "auto" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Ghế trống</th>
                      <th>Ghế đang đặt</th>
                      <th>Ghế Vip</th>
                      <th>Ghế đã đặt</th>
                      <th>Ghế của bạn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <button className="ghe"></button>
                      </td>
                      <td>
                        <button className="ghe gheDangDat"></button>
                      </td>
                      <td>
                        <button className="ghe gheVip"></button>
                      </td>
                      <td>
                        <button className="ghe gheDaDat"></button>
                      </td>
                      <td>
                        <button className="ghe gheCuaBan">
                          <UserOutlined />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className=" bookingTicket col-lg-3">
              <div className="bookingTicket__wrap">
                <h3 className="text-center text-white">{tenPhim}</h3>
                <p>Địa điểm: {tenCumRap}</p>
                <p>Địa chỉ: {diaChi}</p>
                <p>
                  Ngày chiếu: {ngayChieu} - {gioChieu}
                </p>
                <p>{tenRap}</p>
                <hr />
                <div className="badge mx-auto w-100 badge-pill badge-danger">
                  <p className="h6 p-0 m-0">
                    Thời gian giữ ghế:{" "}
                    <span>
                      {moment.utc(this.state.timeOut * 1000).format("mm:ss")}
                    </span>
                  </p>
                </div>
                <table className="table table-borderless text-center text-white">
                  <thead>
                    <tr>
                      <th>Vé</th>
                      <th className="text-center">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingSeat.length > 0 ? (
                      <tr>
                        <td>
                          {this.state.gheThuong} - Ghế thường,{" "}
                          {this.state.gheVip} - Ghế Vip
                        </td>
                        <td>{tongTienVe.toLocaleString() + " VNĐ"}</td>
                      </tr>
                    ) : (
                      <p className="text-center">Bạn chưa chọn chỗ ngồi</p>
                    )}
                  </tbody>
                </table>
                <hr />
                <p>Tài khoản</p>
                <p>{email}</p>
                <p>Số điện thoại</p>
                <p>{soDT}</p>
                <button
                  className="btn btn-success"
                  style={{ width: "100%" }}
                  onClick={(e) => this.handleSubmit(e)}
                >
                  ĐẶT VÉ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
