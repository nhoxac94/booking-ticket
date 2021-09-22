import axios from "axios";
import React, { Component } from "react";
import "./SeatDetail.scss";
import Loader from "components/Loader/Loader";
import { UserOutlined } from "@ant-design/icons";
import movieApi from "apis/movieApi";

export default class SeatDetail extends Component {
  state = {
    seatPlan: [],
    loading: true,
  };

  componentDidMount() {
    const { maLichChieu } = this.props.match.params;
    console.log(maLichChieu);
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
  }

  render() {
    const { loading, seatPlan } = this.state;
    const { thongTinPhim } = seatPlan;
    if (loading === true) return <Loader />;
    const { diaChi, gioChieu, hinhAnh, ngayChieu, tenCumRap, tenPhim, tenRap } =
      thongTinPhim;
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-9 mt-4">
              <div
                className="shapeTheater"
                style={{ width: "80%", margin: "auto" }}
              >
                <div style={{ border: "solid 5px #000" }} />
                <div id="trapezoid" className="text-center">
                  Màn hình
                </div>
              </div>

              <div
                className="seatPlan text-center"
                style={{ width: "80%", margin: "auto" }}
              >
                {this.state.seatPlan.danhSachGhe.map((ghe, index) => {
                  console.log(ghe);
                  let gheVip = "";
                  let gheDangDat = "";
                  let gheDaDat = "";

                  if (ghe.loaiGhe === "Vip") gheVip = "gheVip";
                  if (ghe.daDat) gheDaDat = "gheDaDat";

                  return (
                    <>
                      <button className={`ghe ${gheVip} ${gheDaDat}`}>
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
                <hr />
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
                        <button className="ghe "></button>
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

            <div className="col-3 mt-4">
              <div style={{ width: "80%" }}>
                <h3 className="text-center text-success">0</h3>
                <hr />
                <h3 className="text-center">{tenPhim}</h3>
                <p>Địa điểm: {tenCumRap}</p>
                <p>Địa chỉ: {diaChi}</p>
                <p>
                  Ngày chiếu: {ngayChieu} - {gioChieu}
                </p>
                <p>{tenRap}</p>
                <hr />
                <table className="table table-borderless text-center">
                  <thead>
                    <tr>
                      <th>Vé</th>
                      <th className="text-center">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
                <hr />
                <p>Email</p>
                <p>string@gmail.com</p>
                <hr />
                <p>Phone</p>
                <p>097777999</p>
                <button className="btn btn-success" style={{ width: "100%" }}>
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
