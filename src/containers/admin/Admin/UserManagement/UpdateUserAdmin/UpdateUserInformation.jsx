import React, { Component } from 'react'
import { withFormik } from 'formik'
import { connect } from 'react-redux'
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import { GROUP_ID } from 'settings/apiConfig';
import Loader from 'components/Loader/Loader';
import { actSearchUser } from '../module/action';
import userApi from 'apis/userApi';


class UpdateUserInformation extends Component {

    render() {
        const { handleSubmit, handleChange, user, loading} = this.props;
        console.log(user);
        if (loading) return <Loader />
        if (!user) return <Loader />
        return (
            <div className="container-fluid">
                <div style={{ width: "80%" }}>
                    <h3 className="mb-5">Edit User:
                        <span className="text-primary"> {user.taiKhoan} </span>
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-6">
                                <label >Tài Khoản</label>
                                <input type="text" className="form-control" name="taiKhoan" onChange={handleChange} defaultValue={user.taiKhoan} disabled />
                            </div>
                            <div className="form-group col-6">
                                <label >Mật khẩu</label>
                                <input type="text" className="form-control" name="matKhau" onChange={handleChange} defaultValue={user.matKhau} />
                            </div>
                            <div className="form-group col-6">
                                <label >Họ tên</label>
                                <input type="text" className="form-control" name="hoTen" onChange={handleChange} defaultValue={user.hoTen} />
                            </div>
                            <div className="form-group col-6">
                                <label >Email</label>
                                <input type="email" className="form-control" name="email" onChange={handleChange} defaultValue={user.email} />
                            </div>
                            <div className="form-group col-6">
                                <label >Số điện thoại</label>
                                <input type="text" className="form-control" name="soDt" onChange={handleChange} defaultValue={user.soDt} />
                            </div>
                            <div className="form-group col-6">
                                <label >Loại người dùng</label>
                                <select className="form-control" name="maLoaiNguoiDung" onChange={handleChange} defaultValue={user.maLoaiNguoiDung}>
                                    <option>Chọn loại ngưởi dùng</option>
                                    <option value="KhachHang">Khách Hàng</option>
                                    <option value="QuanTri">Quản Trị</option>
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label >Mã nhóm</label>
                                <input type="text" className="form-control" name="maNhom" onChange={handleChange} defaultValue={GROUP_ID} />
                            </div>
                        </div>
                        <div className=" mt-5">
                            <div className="text-right">
                                <button className="btn btn-primary" type="submit"> Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const userName = this.props.match.params.userId;
        this.props.dispatch(actSearchUser(userName))
    }

}

const UpdateUserInformationWithFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "",
        maNhom: GROUP_ID,
    }),

  
    // validate: (values, props) => {
    //   const errors = {};

    //   if (!values.matKhau || !props.user.matKhau) {
    //     errors.taiKhoan = "Required";
    //   }
    //   console.log(errors);
    //   console.log(props.user);
    //   return errors;
    // },

    

    handleSubmit: (values, { props, setSubmitting }) => {
        const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
        for (let key in values) {
            if (!values[key]) {
                values[key] = props.user[key]
            }
        }
        userApi.fetchEditUserApi(values, accessToken)
            .then(res => {
                alert('Completed!!!')
                props.history.push("/admin/users")
            })
            .catch(error => console.log(error))

    },

})(UpdateUserInformation);

const mapStateToProps = state => ({
    user: state.adminUserReducer.user,
    loading: state.adminUserReducer.loading,
})




export default connect(mapStateToProps)(UpdateUserInformationWithFormik);


