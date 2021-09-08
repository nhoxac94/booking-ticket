import React, { Component } from 'react'

export default class UserManagement extends Component {
    render() {
        return (
            <div className="container">
                <div>Thêm Người dùng</div>
                <div className="row">
                    <input className="mr-5" type="text" placeholder="Nhập vào tài khoản hoặc tên người dùng" style={{ width: '60%' }} />
                    <button>Tìm</button>
                </div>
                <table className="table">
                    <thead>
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
                        <tr>
                           <td>1</td>
                           <td>truongtansang</td>
                           <td>123456</td>
                           <td>Trương Tấn Sang</td>
                           <td>truongtansang@gmail.com</td>
                           <td>0123456789</td>
                           <td>
                               <button className = "btn btn-primary">Sửa</button>
                               <button className = "btn btn-danger">Xóa</button>
                           </td>

                        </tr>
                        
                    </tbody>
                </table>

            </div>
        )
    }
}
