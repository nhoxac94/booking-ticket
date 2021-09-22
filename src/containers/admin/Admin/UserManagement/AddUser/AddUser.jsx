import React, { Component } from 'react'
import { withFormik } from 'formik'
import { connect } from 'react-redux'
import userApi from 'apis/userApi';
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

class AddUser extends Component {
    render() {
        const { handleSubmit, handleChange, errors, touched, handleBlur } = this.props;
        return (
            <div className="mx-5">
                <h3>Thêm người dùng</h3>
                <ul className="nav mb-3" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/users" className="nav-link  btn btn-light" data-toggle="pill" role="tab" >
                            Quản lý người dùng
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/admin/add-user" className="nav-link btn btn btn-light ml-2 active" id="pills-addMovie-tab" data-toggle="pill" role="tab" >
                            Thêm người dùng
                        </Link>
                    </li>
                </ul>
                <div style={{ width: "80%" }}>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-6">
                                {/* <label >Tài Khoản</label> */}
                                <input type="text" className="form-control" name="taiKhoan" onChange={handleChange} onBlur={handleBlur} required placeholder="Tài Khoản" />
                                {errors.taiKhoan && touched.taiKhoan && <small className="text-danger">{errors.taiKhoan}</small>}
                            </div>
                            <div className="form-group col-6">
                                {/* <label >Mật khẩu</label> */}
                                <input type="text" className="form-control" name="matKhau" onChange={handleChange} onBlur={handleBlur} required placeholder="Mật khẩu" />
                                {errors.matKhau && touched.matKhau && (<small className="text-danger">{errors.matKhau}</small>)}

                            </div>
                            <div className="form-group col-6">
                                {/* <label >Họ tên</label> */}
                                <input type="text" className="form-control" name="hoTen" onChange={handleChange} onBlur={handleBlur} required placeholder="Họ tên" />
                                {errors.hoTen && touched.hoTen && (<small className="text-danger">{errors.hoTen}</small>)}

                            </div>
                            <div className="form-group col-6">
                                {/* <label >Email</label> */}
                                <input type="email" className="form-control" name="email" onChange={handleChange} onBlur={handleBlur} required placeholder="Email" />
                                {errors.email && touched.email && (<small className="text-danger">{errors.email}</small>)}

                            </div>
                            <div className="form-group col-6">
                                {/* <label >Số điện thoại</label> */}
                                <input type="text" className="form-control" name="soDt" onChange={handleChange} onBlur={handleBlur} required  equired placeholder="Số điện thoại"/>
                                {errors.soDt && touched.soDt && (<small className="text-danger">{errors.soDt}</small>)}

                            </div>
                            <div className="form-group col-6">
                                {/* <label >Loại người dùng</label> */}
                                <select className="form-control" name="maLoaiNguoiDung" onChange={handleChange} onBlur={handleBlur} required >
                                {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung && (<small className="text-danger">{errors.maLoaiNguoiDung}</small>)}
                                    <option value="" hidden >Chọn loại ngưởi dùng</option>
                                    <option value="KhachHang">Khách Hàng</option>
                                    <option value="QuanTri">Quản Trị</option>
                                </select>
                            </div>
                            <div className="form-group col-6">
                                {/* <label >Mã nhóm</label> */}
                                <input type="text" className="form-control" name="maNhom" onChange={handleChange} onBlur={handleBlur} required placeholder="Mã nhóm" />
                                {errors.maNhom && touched.maNhom && (<small className="text-danger">{errors.maNhom}</small>)}

                            </div>
                        </div>
                        <div className=" mt-5">
                            <div className="text-right">
                                <button className="btn btn-primary" type="submit"> Thêm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const AddUserWithFormik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "",
        maNhom: "",
    }),

    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string().required('Username is required!!!'),
        matKhau: Yup.string().required('Password is required!!!'),
        hoTen: Yup.string().required('Name is requires!!!').matches("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", "Must be Character"),
        email: Yup.string().required('Email is require!!!').email('Example: email@gmail.com'),
        soDt: Yup.string().matches(/^[0-9]+$/gi, "Must be a Number").required('Phone Number is require!!!'),
        maLoaiNguoiDung: Yup.string().required('Phone Number is require!!!'),

        maNhom: Yup.string().required('Group is require!!!'),
    }),

    handleSubmit: (values, { props, setSubmitting, resetForm }) => {
        const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
        userApi.fetchAddUserApi(values, accessToken)
            .then(res => {
                resetForm()
                alert('Completed!!!')
                props.history.push("/admin")
                console.log(res);
            })
            .catch(err => {
                alert('UserName or Email already exists')
                console.log(err);

            })
    },

})(AddUser);

export default connect()(AddUserWithFormik);


