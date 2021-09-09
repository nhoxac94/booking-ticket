import React, { Component } from 'react'

export default class ShowUserInfor extends Component {
    render() {
        return (
            <div className="tab-pane fade show active container" id="userInfor" role="tabpanel" aria-labelledby="nav-contact-tab">
                <form>
                    <div className="row">
                        <div className="form-group col-6">
                            <label >Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group col-6">
                            <label >Tài Khoản</label>
                            <input type="text" className="form-control" id="taiKhoan" />
                        </div>
                        <div className="form-group col-6">
                            <label >Họ Tên</label>
                            <input type="text" className="form-control" id="hoTen" />
                        </div>
                            <div className="form-group col-6">
                                <label >Mật Khẩu</label>
                                <input type="password" className="form-control" id="matKhau" />
                            </div>
                        <div className="form-group col-6">
                            <label >Số điện thoại</label>
                            <input type="number" className="form-control" id="hoTen" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Cập nhật</button>
                </form>

            </div>


        )
    }
}
