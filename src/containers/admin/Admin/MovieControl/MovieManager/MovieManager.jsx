import React, { Component } from "react";
import {
  SearchOutlined, CloseOutlined, CalendarOutlined, EditOutlined
} from "@ant-design/icons";
import "./MovieManager.scss";
import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
import moment from "moment";
import { USER_BOOKING_TICKET_LOGIN } from "containers/shared/Auth/module/type";
import { Link } from "react-router-dom";

export default class MovieManager extends Component {
  state = {
    listMovieInPage: null,
    listMovieSearchInPage: null,
    keySearch: null,
    loading: true,
  }

  handleGetListSearchMovie(page) {
    movieApi.fetchSearchMovieInPageApi(this.state.keySearch, page)
      .then(res =>
        this.setState({ listMovieSearchInPage: res.data, loading: false, }))
      .catch(err => console.log(err))
  }

  handleGetListMovie(page) {
    movieApi.fetchMovieAdminPageApi(page)
      .then(res =>
        this.setState({
          listMovieInPage: res.data, loading: false, listMovieSearchInPage: null, keySearch: null
        }))
      .catch(err => console.log(err))
  }

  // Tạo mảng pagiantion
  handlePagination(totalPages) {
    let renderPagination = [];
    for (let i = 0; i < totalPages; i++) {
      renderPagination.push(i + 1)
    }
    return renderPagination;
  }

  handleDeleteMovie(movieID) {
    const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
    movieApi.fetchDeleteMovieApi(movieID, accessToken)
      .then(res => {
        console.log(res);
        if (this.state.listMovieSearchInPage) {
          this.handleGetListSearchMovie(this.state.listMovieSearchInPage.currentPage)
        } else {
          this.handleGetListMovie(this.state.listMovieInPage.currentPage)
        }
      })
      .catch(res => alert('Cant not delete Movie have showTime'))
  }

  handleMovieRender() {
    let listMovieRender = null;
    if (this.state.listMovieSearchInPage) {
      listMovieRender = { ...this.state.listMovieSearchInPage }
    } else {
      listMovieRender = { ...this.state.listMovieInPage }
    }
    return listMovieRender;
  }

  handleSearchMovieInPage(e) {
    e.preventDefault()
    const startPage = 1;
    if (!e.target[0].value) {
      this.handleGetListMovie(startPage)
    } else {
      movieApi.fetchSearchMovieInPageApi(e.target[0].value, startPage)
        .then(res =>
          this.setState({
            listMovieSearchInPage: res.data,
            keySearch: e.target[0].value
          })
        )
        .catch(err => console.log(err))
    }

  }

  handleChangePagination(page) {
    if (this.state.listMovieSearchInPage) {
      movieApi.fetchSearchMovieInPageApi(this.state.keySearch, page)
        .then(res => {
          this.setState({ listMovieSearchInPage: res.data })
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      movieApi.fetchMovieAdminPageApi(page)
        .then(res => {
          this.setState({
            listMovieInPage: res.data,
          })
        })
        .catch(err => console.log(err))
    }

  }

  handleNextPagination(currentPage) {
    let nextPage = currentPage + 1;
    if (this.state.listMovieSearchInPage) {
      this.handleGetListSearchMovie(nextPage)
    } else {
      this.handleGetListMovie(nextPage)
    }
  }

  handlePrevPagination(currentPage) {
    let prevPage = currentPage - 1;
    if (this.state.listMovieSearchInPage) {
      this.handleGetListSearchMovie(prevPage)
    } else {
      this.handleGetListMovie(prevPage)
    }
  }

  render() {
    const listMovieRender = this.handleMovieRender();
    if (this.state.loading) return <Loader />
    return (
      <div className="container-fluid ">
        <h3 >Quản lí Phim</h3>
        <div className="mr-4 mb-0" >
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <Link to="/admin/movies" className="nav-link active btn btn-light" role="tab" >
                Quản lý phim
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link to="/admin/movies/add-movie" className="nav-link btn btn btn-light ml-2" role="tab" >
                Thêm phim
              </Link>
            </li>
          </ul>
          <div>
            <form className="input-group mb-2" onSubmit={(e) => this.handleSearchMovieInPage(e)}>
              <input type="text" className="form-control" placeholder="Nhập vào tên phim hoặc mã số phim" />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  <SearchOutlined type />
                </button>
              </div>
            </form>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Mã Phim</th>
                  <th>Tên phim</th>
                  <th>Hình Ảnh</th>
                  <th>Mô tả</th>
                  <th>Mã nhóm</th>
                  <th>Ngày khởi chiếu</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {listMovieRender.items.map(movie => {
                  return (
                    <tr key={movie.maPhim}>
                      <td>{movie.maPhim}</td>
                      <td>{movie.tenPhim}</td>
                      <td>
                        <img src={movie.hinhAnh} alt="" style={{ width: 80, height: 80 }} />
                      </td>
                      <td style={{ width: "35%" }}>{movie.moTa.length < 200 ? movie.moTa : movie.moTa.slice(0, 200) + "..."}</td>
                      <td>{movie.maNhom}</td>
                      <td>{moment(movie.ngayKhoiChieu).format('DD-MM-YYYY')}</td>
                      <td>
                        <div style={{ display: "inline" }} className="mr-2">
                          <Link to={{pathname :`/admin/movies/movie-showtime/${movie.maPhim}`, movieInformation : movie}} className="btn btn-primary"><CalendarOutlined /> </Link>
                          &thinsp;
                          <Link to={`/admin/movies/edit-movie/${movie.maPhim}`} className="btn btn-success" ><EditOutlined /> </Link>
                          &thinsp;
                          <div className="btn btn-danger" onClick={() => this.handleDeleteMovie(movie.maPhim)}><CloseOutlined /></div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="text-right">
              <ul className="d-block">
                <button className="btn btn-outline-primary mr-1" disabled={listMovieRender.currentPage === 1 } onClick={() => this.handlePrevPagination(listMovieRender.currentPage)} >Previous</button>
                {this.handlePagination(listMovieRender.totalPages).map((page => {
                  return (<li className={`btn btn-outline-dark mr-1 ${listMovieRender.currentPage === page && "active"}`} key={page} onClick={() => { this.handleChangePagination(page) }} >{page}</li>)
                }))}
                <button className="btn btn-outline-primary" disabled={listMovieRender.currentPage === listMovieRender.totalPages } onClick={() => this.handleNextPagination(listMovieRender.currentPage)}>Next</button>
              </ul>
            </div>
          </div >
        </div >
      </div >

    );
  }

  componentDidMount = () => {
    const startMoviePage = 1;
    this.handleGetListMovie(startMoviePage)
  }
}




