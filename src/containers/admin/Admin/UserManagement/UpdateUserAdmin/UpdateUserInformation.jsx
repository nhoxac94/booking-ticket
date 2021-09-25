import React, { Component } from 'react'
import { connect } from 'react-redux'
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import { GROUP_ID } from 'settings/apiConfig';
import Loader from 'components/Loader/Loader';
import userApi from 'apis/userApi';


export default class UpdateUserInformation extends Component {
    state = {
        values: {
            email: "",
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            soDt: "",
            maNhom: GROUP_ID,
            maLoaiNguoiDung: "",
        },
        loading: true,
        errors: {
            email: "",
            taiKhoan: "",
            hoTen: "",
            matKhau: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
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
        const { value, name } = e.target
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

    render() {
        const { values, loading, errors } = this.state;
        if (loading) return <Loader />
        if (!values) return <Loader />
        return (
            <div className="container-fluid">
                <div style={{ width: "80%" }}>
                    <h3 className="mb-5">Edit User:
                        <span className="text-primary"> {values.taiKhoan} </span>
                    </h3>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="row">
                            <div className="form-group col-6">
                                <label >Tài Khoản</label>
                                <input type="text" className="form-control" name="taiKhoan" onChange={e => this.handleChange(e)} defaultValue={values.taiKhoan} disabled />
                                {errors.taiKhoan && <small className = "text-danger text-center">{errors.taiKhoan}</small>}
                            </div>
                            <div className="form-group col-6">
                                <label >Mật khẩu</label>
                                <input type="text" className="form-control" name="matKhau" onChange={e => this.handleChange(e)} defaultValue={values.matKhau} />
                                {errors.matKhau && <small className = "text-danger text-center">{errors.matKhau}</small>}

                            </div>
                            <div className="form-group col-6">
                                <label >Họ tên</label>
                                <input type="text" className="form-control" name="hoTen" onChange={e => this.handleChange(e)} defaultValue={values.hoTen} />
                                {errors.hoTen && <small className = "text-danger text-center">{errors.hoTen}</small>}

                            </div>
                            <div className="form-group col-6">
                                <label >Email</label>
                                <input type="email" className="form-control" name="email" onChange={e => this.handleChange(e)} defaultValue={values.email} />
                                {errors.email && <small className = "text-danger text-center">{errors.email}</small>}

                            </div>
                            <div className="form-group col-6">
                                <label >Số điện thoại</label>
                                <input type="text" className="form-control" name="soDt" onChange={e => this.handleChange(e)} defaultValue={values.soDt} />
                                {errors.soDt && <small className = "text-danger text-center">{errors.soDt}</small>}

                            </div>
                            <div className="form-group col-6">
                                <label >Loại người dùng</label>
                                <select className="form-control" name="maLoaiNguoiDung" onChange={e => this.handleChange(e)} defaultValue={values.maLoaiNguoiDung}>
                                    <option value = "">Chọn loại ngưởi dùng</option>
                                    <option value="KhachHang">Khách Hàng</option>
                                    <option value="QuanTri">Quản Trị</option>
                                </select>
                                {errors.maLoaiNguoiDung && <small className = "text-danger text-center">{errors.maLoaiNguoiDung}</small>}

                            </div>
                            <div className="form-group col-6">
                                <label >Mã nhóm</label>
                                <input type="text" className="form-control" name="maNhom" onChange={e => this.handleChange(e)} defaultValue={values.maNhom} />
                                {errors.maNhom && <small className = "text-danger text-center">{errors.maNhom}</small>}

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
        userApi.fetchSearchUserApi(userName)
            .then(res => {
                // search => list user => find exact user information
                const indexUser = res.data.findIndex(user => {
                    return user.taiKhoan === userName;
                })
                const valuesInitial = {...this.state.values, ...res.data[indexUser]};
                this.setState({
                    values: valuesInitial,
                    loading: false,
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}




