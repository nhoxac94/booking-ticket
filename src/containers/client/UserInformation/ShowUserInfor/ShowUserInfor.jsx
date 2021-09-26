import React, { Component } from 'react'
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import Loader from 'components/Loader/Loader';
import { actGetUserInformation } from '../module/actions';
import { connect } from 'react-redux'
import { GROUP_ID } from 'settings/apiConfig';
import userApi from 'apis/userApi';


class ShowUserInfor extends Component {

    state = {
        values: {
            email: "",
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            soDt: "",
            maNhom: GROUP_ID,
            maLoaiNguoiDung: "KhachHang"
        },
        errors: {
            email: null,
            taiKhoan: null,
            hoTen: null,
            matKhau: null,
            soDt: null,
        },
    }

    handleSubmit(e) {
        e.preventDefault()
        let isValid = true;

        for (let key in this.state.errors) {
            if (this.state.errors[key]) {
                isValid = false;
            }
        }
        if (!isValid) {
            alert('Please complete form before submit!!!')
        } else {
            const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
            userApi.fetchEditUserApi(this.state.values, accessToken)
                .then(res => {
                    console.log(res);
                    alert('Update user information is completed')
                })
                .catch(error => console.log(error))
        }
    }

    handleChange(e) {
        let { name, value } = e.target;


        let errorMessage = ""


        if (!value) {
            errorMessage = "Please input value"
        } else {
            if (name === "email") {
                const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                errorMessage = regexEmail.test(value) ? "" : "Email is not valid"
            }

            if (name === "hoTen") {
                const regexName = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +"ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/
                errorMessage = regexName.test(value) ? "" : "Your name must be have only letter"
            }

            if (name === "soDt") {
                const regexNumber = /^[0-9]*$/
                errorMessage = regexNumber.test(value) ? "" : "Your phone Number must be have only number"
            }
        }

        let valuesInput = { ...this.state.values, [name]: value.trim() }
        let errorsInput = { ...this.state.errors, [name]: errorMessage }

        this.setState({
            values: valuesInput,
            errors: errorsInput
        })
    }

    componentWillReceiveProps(nextProps) {
        let valuesInitial = {
            ...this.state.values,
            email: nextProps.user.email,
            taiKhoan: nextProps.user.taiKhoan,
            hoTen: nextProps.user.hoTen,
            matKhau: nextProps.user.matKhau,
            soDt: nextProps.user.soDT,
        }

        this.setState({
            values: valuesInitial
        })
       
    }
    render() {
        const { loading } = this.props;
        const { values, errors } = this.state;

        if (loading) return <Loader />
        return (
            <div className="tab-pane fade show active container mt-3" id="userInfor" role="tabpanel" aria-labelledby="nav-contact-tab">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div className="row">
                        <div className="form-group col-12 col-md-6">
                            <label >Email</label>
                            <input type="email" className="form-control" name="email" onChange={e => this.handleChange(e)} defaultValue={values.email} />
                            {errors.email && <small className="text-center text-danger">{errors.email}</small>}
                        </div>
                        <div className="form-group ol-12 col-md-6">
                            <label >Tài Khoản</label>
                            <input type="text" className="form-control" name="taiKhoan" disabled onChange={e => this.handleChange(e)}
                                defaultValue={values.taiKhoan} />
                            {errors.taiKhoan && <small className="text-center text-danger">{errors.taiKhoan}</small>}
                        </div>
                        <div className="form-group ol-12 col-md-6">
                            <label >Họ Tên</label>
                            <input type="text" className="form-control" name="hoTen" onChange={e => this.handleChange(e)}
                                defaultValue={values.hoTen} />
                            {errors.hoTen && <small className="text-center text-danger">{errors.hoTen}</small>}
                        </div>
                        <div className="form-group ol-12 col-md-6">
                            <label >Mật Khẩu</label>
                            <input type="password" className="form-control" name="matKhau" onChange={e => this.handleChange(e)} defaultValue={values.matKhau}
                            />
                            {errors.matKhau && <small className="text-center text-danger">{errors.matKhau}</small>}
                        </div>
                        <div className="form-group ol-12 col-md-6">
                            <label >Số điện thoại</label>
                            <input type="number" className="form-control" name="soDt" onChange={e => this.handleChange(e)} defaultValue={values.soDt}
                            />
                            {errors.soDt && <small className="text-center text-danger">{errors.soDt}</small>}
                        </div>
                    </div>
                    <div className="mt-3 text-right">

                        <button type="submit" className="btn btn-primary update__user">Cập nhật</button>
                    </div>
                </form>
            </div>

        )
    }

    componentDidMount() {
        const userName = { taiKhoan: JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))?.taiKhoan };
        this.props.dispatch(actGetUserInformation(userName))

    }
}

const mapStateToProps = state => ({
    user: state.informationReducer.user,
    loading: state.informationReducer.loading,
})

export default connect(mapStateToProps)(ShowUserInfor);