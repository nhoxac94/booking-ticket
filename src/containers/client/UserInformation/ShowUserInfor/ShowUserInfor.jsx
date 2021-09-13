import React, { Component } from 'react'
import { Formik, withFormik } from 'formik'
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import Loader from 'components/Loader/Loader';
import { actGetUserInformation, actUpdateInformation } from '../module/actions';
import { connect } from 'react-redux'


class ShowUserInfor extends Component {
  
    render() {
        const { handleSubmit, handleChange, stateUserInfor } = this.props;
        const {user, loading } = stateUserInfor;
        if (loading) return <Loader />
        return (
            <div className="tab-pane fade show active container" id="userInfor" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-6">
                                <label >Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="email" onChange={handleChange} defaultValue = {user.data.email} />
                            </div>
                            <div className="form-group col-6">
                                <label >Tài Khoản</label>
                                <input type="text" className="form-control" id="taiKhoan" name="taiKhoan" onChange={handleChange}
                                     defaultValue = {user.data.taiKhoan}/>
                            </div>
                            <div className="form-group col-6">
                                <label >Họ Tên</label>
                                <input type="text" className="form-control" id="hoTen" name="hoTen" onChange={handleChange}
                                     defaultValue = {user.data.hoTen}/>
                            </div>
                            <div className="form-group col-6">
                                <label >Mật Khẩu</label>
                                <input type="password" className="form-control" id="matKhau" name="matKhau" onChange={handleChange} defaultValue = {user.data.matKhau}
                                    />
                            </div>
                            <div className="form-group col-6">
                                <label >Số điện thoại</label>
                                <input type="number" className="form-control" id="soDt" name="soDt" onChange={handleChange} defaultValue = {user.data.soDT}
                                    />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                    </form>
            </div>

        )
    }

    componentDidMount = () => {
        const userName = { taiKhoan: JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).taiKhoan };
        this.props.dispatch(actGetUserInformation(userName))
    }
}

const ShowUserInforWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: "",
        taiKhoan: "",
        hoTen: "",
        matKhau: "",
        soDt: "",
        maLoaiNguoiDung : "KhachHang"
    }),
    
    // Custom sync validation
    // validate: values => {
    //     const errors = {};

    //     if (!values.userName) {
    //         errors.name = "Required";
    //     }
    //     console.log(errors);
    //     return errors;
    // },

    handleSubmit: (values, { props, setSubmitting , setFieldTouched}) => {       
       const  {soDT, loaiNguoiDung,thongTinDatVe, ...tempUser} = props.stateUserInfor.user.data;
       console.log(tempUser);
       const currentUser = {...tempUser, soDt :soDT }
       for ( let i in values) {
           if (!values[i] ) {
               delete values[i]
           }
       }
       const updateUser = {...currentUser, ...values}
       const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken

       props.dispatch(actUpdateInformation(updateUser, accessToken))
    },


})(ShowUserInfor);

const mapStateToProps = state => ({
    stateUserInfor : state.updateInformationReducer
})

export default connect(mapStateToProps)(ShowUserInforWithFormik);