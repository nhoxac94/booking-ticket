import userApi from 'apis/userApi'
import Loader from 'components/Loader/Loader';
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    SearchOutlined, CloseOutlined, EditOutlined
} from "@ant-design/icons";
import { USER_IN_PAGE } from '../moduleShare/types';

export default class UserManagement extends Component {
    state = {
        listPageUser: null,
        listSearchUser: null,
        loading: true,
        keySearch: null,
    }
    handleGetPageUser(page) {
        userApi.fetchPageUserApi(page)
            .then(res => {
                if (this.state.listSearchUser) {
                    this.setState({
                        listSearchUser: res.data,
                        loading: false,
                    })
                } else {
                    this.setState({
                        listPageUser: res.data,
                        loading: false,
                    })
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    loading: false,
                })
            })
    }
    handleShowUserPage() {
        let listUserRender = [];
        if (this.state.listSearchUser) {
            listUserRender = { ...this.state.listSearchUser }
        } else {
            listUserRender = { ...this.state.listPageUser }
        }
        return listUserRender;
    }
    deleteUser(accountUser, accessToken) {
        userApi.fetchDeleteUserApi(accountUser, accessToken)
            .then(res => {
                console.log(res);
                const listUserRender = this.handleShowUserPage()
                this.handleGetPageUser(listUserRender.currentPage)
            })
            .catch(error => {
                console.log(error);
            })
    }
    // Tạo mảng render pagination
    handlePagination(totalPages) {
        let renderPagination = [];
        for (let i = 0; i < totalPages; i++) {
            renderPagination.push(i + 1)
        }
        return renderPagination;
    }

    handleFindUser(e) {
        e.preventDefault();
        const startPage = 1;
        if (!e.target[0].value) {
            this.setState({ listSearchUser: null, keySearch: null })
        } else {
            userApi.fetchSearchUserPageApi(e.target[0].value, startPage)
                .then(res => {
                    this.setState({
                        listSearchUser: res.data,
                        keySearch: e.target[0].value,
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    handleChangePagination(page) {

        if (this.state.listSearchUser) {
            userApi.fetchSearchUserPageApi(this.state.keySearch, page)
                .then(res => {
                    this.setState({
                        listSearchUser: res.data,
                    })
                })
                .catch(err => {
                    console.log(err);
                })

        } else {
            userApi.fetchPageUserApi(page)
                .then(res => {
                    this.setState({
                        listPageUser: res.data,
                    })
                })
                .catch(err => console.log(err))
        }
    }

    render() {
        const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
        const listUserRender = this.handleShowUserPage()
        if (this.state.loading) return <Loader />
        return (
            <div className="mx-5"  >
                <h3>Quản lí người dùng</h3>
                <ul className="nav mb-3" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/users" className="nav-link active btn btn-light" data-toggle="pill" role="tab" >
                            Quản lý người dùng
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/add-user" className="nav-link btn btn btn-light ml-2" id="pills-addMovie-tab" data-toggle="pill" role="tab" >
                            Thêm người dùng
                        </Link>
                    </li>
                </ul>
                <div >
                    <div className="mb-2">

                        <form onSubmit={(e) => this.handleFindUser(e)}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập vào tên hoặc tài khoản"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="submit"
                                    >
                                        <SearchOutlined className="moviemanager__icon" />
                                    </button>
                                </div>
                            </div>
                        </form>

                        <table className="table table-bordered table-striped ">
                            <thead className="thead-dark">
                                <tr>
                                    <th>STT</th>
                                    <th>Tài Khoản</th>
                                    <th>Mật khẩu </th>
                                    <th>Họ tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Thao tác</th>

                                </tr>
                            </thead>
                            <tbody>
                                {listUserRender.items.map((user, idx) => {

                                    return (
                                        <tr key={user.taiKhoan}>
                                            <td>{idx + 1 + (listUserRender.currentPage - 1) * USER_IN_PAGE}</td>
                                            <td>{user.taiKhoan}</td>
                                            <td>{user.matKhau}</td>
                                            <td>{user.hoTen}</td>
                                            <td>{user.email}</td>
                                            <td>{user.soDt}</td>
                                            <td className="py-2">
                                                <Link to={ `/admin/users/edit-user/${user.taiKhoan}`} className="btn btn-success"><EditOutlined /></Link>
                                                <span> </span>
                                                <button className="btn btn-danger" onClick={() => this.deleteUser(user.taiKhoan, accessToken)}><CloseOutlined /></button>
                                            </td>

                                        </tr>
                                    )

                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="text-right">
                        <ul className="d-block">
                            <button className="btn btn-outline-primary mr-1" disabled={listUserRender.currentPage === 1 } onClick={() => this.handleChangePagination(listUserRender.currentPage - 1)}>Previous</button>
                            {this.handlePagination(listUserRender.totalPages).map((page => {
                                return (<li className={`btn btn-outline-dark mr-1 ${listUserRender.currentPage === page && "active"}`} key={page} onClick={() => this.handleChangePagination(page)}>{page}</li>)
                            }))}
                            <button className="btn btn-outline-primary" disabled={listUserRender.currentPage === listUserRender.totalPages} onClick={() => this.handleChangePagination(listUserRender.currentPage + 1)}>Next</button>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
        const startPage = 1;
        this.handleGetPageUser(startPage)
    }
}



