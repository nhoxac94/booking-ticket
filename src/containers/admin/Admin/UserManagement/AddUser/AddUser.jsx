import React, { Component } from 'react'
import { DoubleLeftOutlined } from '@ant-design/icons'

export default class AddUser extends Component {
    render() {
        return (
            <div className="container">
                <h1>Thêm người dùng</h1>
                <form>
                    <div className="row">
                        <div className="form-group col-6">
                            <label >Tài Khoản</label>
                            <input type="text" className="form-control" name="taiKhoan" />
                        </div>
                        <div className="form-group col-6">
                            <label >Mật khẩu</label>
                            <input type="text" className="form-control" name="matKhau" />
                        </div>
                        <div className="form-group col-6">
                            <label >Họ tên</label>
                            <input type="text" className="form-control" name="hoTen" />
                        </div>
                        <div className="form-group col-6">
                            <label >Email</label>
                            <input type="email" className="form-control" name="email" />
                        </div>
                        <div className="form-group col-6">
                            <label >Số điện thoại</label>
                            <input type="number" className="form-control" name="soDt" />
                        </div>
                        <div className="form-group col-6">
                            <label >Loại người dùng</label>
                            <select className="form-control" name="maLoaiNguoiDung">
                                <option>Khách Hàng</option>
                                <option>Quản Trị</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label >Mã nhóm</label>
                            <input type="text" className="form-control" name="maNhom" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div> <DoubleLeftOutlined /> Trở lại</div>
                        </div>
                        <div className="col-6 text-right">
                            <button className="btn btn-primary">Thêm</button>
                        </div>
                    </div>






                </form>
            </div>
        )
    }
}
