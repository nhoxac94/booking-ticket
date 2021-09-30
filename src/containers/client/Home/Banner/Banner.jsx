import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import "./Banner.scss";
import JohnWick from "../../../../assets/img/john-wick-3.jfif";
import SpiderMan from "../../../../assets/img/spiderman-2.jpg";
import EndGame from "../../../../assets/img/endgame.jpg";
import Thor3 from "../../../../assets/img/thor-3.jpg";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
const arrBanner = [
  {
    biDanh: "spider-man-far-from-home",
    danhGia: 10,
    hinhAnh: SpiderMan,
    maNhom: "GP10",
    maPhim: 8589,
    moTa: "Người Nhện xa nhà là phim siêu anh hùng năm 2019 của Mỹ dựa trên nhân vật Peter Parker của Marvel Comics, do Columbia Pictures và Marvel Studios đồng sản xuất và Sony Pictures Releasing phân phối. Phim là phần tiếp theo của Người Nhện: Trở về nhà, đồng thời là phim điện ảnh thứ hai mươi ba của Vũ trụ Điện ảnh Marvel.",
    ngayKhoiChieu: "2021-09-29T20:23:19.55",
    tenPhim: "Spider-Man: Far From Home",
    trailer: "https://www.youtube.com/embed/Nt9L1jCKGnE",
  },
  {
    biDanh: "end-game",
    danhGia: 7,
    hinhAnh: EndGame,
    maNhom: "GP10",
    maPhim: 2212,
    moTa: "“Avengers: Endgame” là phần kết mỹ mãn cho chuyến hành trình đầu tiên kéo dài hơn 10 năm của MCU, với câu chuyện hấp dẫn, giàu cảm xúc, và hàng loạt mối kết nối chặt chẽ.",
    ngayKhoiChieu: "2020-07-31T00:00:00",
    tenPhim: "End Game",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  },
  {
    biDanh: "thor-ragnarok",
    danhGia: 10,
    hinhAnh: Thor3,
    maNhom: "GP10",
    maPhim: 8590,
    moTa: "Thor: Tận thế Ragnarok là một bộ phim siêu anh hùng ra mắt vào năm 2017 của Mỹ do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Bộ phim là phần tiếp theo của Thor và Thor: The Dark World và là bộ phim thứ mười bảy trong Vũ trụ Điện ảnh Marvel.",
    ngayKhoiChieu: "2021-10-13T00:00:00",
    tenPhim: "Thor: Tận thế Ragnarok",
    trailer: "https://www.youtube.com/embed/ue80QwXMRHg",
  },
  {
    biDanh: "john-wick-parabellum",
    danhGia: 8,
    hinhAnh: JohnWick,
    maNhom: "GP10",
    maPhim: 1323,
    moTa: "Thor: Tận thế Ragnarok là một bộ phim siêu anh hùng ra mắt vào năm 2017 của Mỹ do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Bộ phim là phần tiếp theo của Thor và Thor: The Dark World và là bộ phim thứ mười bảy trong Vũ trụ Điện ảnh Marvel.",
    ngayKhoiChieu: "2021-10-13T00:00:00",
    tenPhim: "Thor: Tận thế Ragnarok",
    trailer: "https://www.youtube.com/embed/pU8-7BX9uxs",
  },
];
export default class Banner extends Component {
  state = {
    isActive: true,
    isPlaying: false,
    currentVideo: null,
  };
  render() {
    return (
      <div
        id="carouselBanner"
        className="carousel slide carouselBanner"
        data-ride="carousel"
        data-interval={`${this.state.isActive && 4000}`}
      >
        <ol className="carousel-indicators">
          {arrBanner.map((carouselList, idx) => {
            const { biDanh } = carouselList;
            return (
              <li
                data-target={`#carouselBanner`}
                data-slide-to={idx}
                className={`${idx === 0 && "active"} carouselBanner__list`}
                key={biDanh}
              />
            );
          })}
        </ol>
        <div className="carousel-inner">
          {arrBanner.map((carouselBanner, idx) => {
            const { maPhim, hinhAnh, trailer, biDanh } = carouselBanner;
            return (
              <div
                className={`carousel-item ${idx === 0 && "active"}`}
                style={{ position: "relative" }}
                key={biDanh}
              >
                <Link to={`/chitietphim/${maPhim}`} props={maPhim} key={maPhim}>
                  <img
                    src={hinhAnh}
                    className="d-block w-100"
                    alt={biDanh}
                    style={{
                      ...contentStyle,
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                </Link>
                <FontAwesomeIcon
                  data-toggle="modal"
                  data-target={`#modal${biDanh}`}
                  className="text-white btn"
                  icon={faPlayCircle}
                  style={{
                    fontSize: "100px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() =>
                    this.setState({
                      isActive: false,
                      isPlaying: true,
                      currentVideo: biDanh,
                    })
                  }
                />
                <div
                  className="modal fade"
                  id={`modal${biDanh}`}
                  tabIndex={-1}
                  aria-labelledby={`modalLabel${biDanh}`}
                  aria-hidden="true"
                  onClick={() =>
                    this.setState({ isActive: true, isPlaying: false })
                  }
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-transparent border-0">
                      <div className="modal-header p-0 m-0 border-0">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="embed-responsive embed-responsive-16by9">
                          <ReactPlayer
                            className="w-100"
                            url={trailer}
                            width="100%"
                            height="100%"
                            playing={
                              this.state.currentVideo === biDanh &&
                              this.state.isPlaying
                            }
                            controls={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <a
            className="carousel-control-prev carouselbanner-control-prev"
            href="#carouselBanner"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next carouselbanner-control-next"
            href="#carouselBanner"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
