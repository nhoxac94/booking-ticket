import React, { Component } from 'react'
import { withFormik } from 'formik'
import { connect } from 'react-redux'
import { actSignup, actSignupRequest } from '../module/action';
import * as Yup from 'yup'
import { USER_BOOKING_TICKET_LOGIN } from '../module/type';

class SignUp extends Component {

    render() {
        if (JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))?.accessToken) {
            this.props.history.push("/")
        }
        const {
            handleChange,
            handleSubmit,
            errorSignUp,
            errors,
            handleBlur,
            touched,
        } = this.props;
        return (
            <>
                {errorSignUp && <div className="text-danger text-center">{errorSignUp}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label className="label">Họ Tên</label>
                            <input name="hoTen" type="text" className="input" onChange={handleChange} onBlur={handleBlur} />
                            {errors.hoTen && touched.hoTen && (<small className="text-danger">{errors.hoTen}</small>)}
                        </div>
                        <div className="group">
                            <label className="label">Tài khoản</label>
                            <input name="taiKhoan" type="text" className="input" onChange={handleChange} onBlur={handleBlur} />
                            {errors.taiKhoan && touched.taiKhoan && (<small className="text-danger">{errors.taiKhoan}</small>)}
                        </div>
                        <div className="group">
                            <label className="label">Mật khẩu</label>
                            <input name="matKhau" type="password" className="input" data-type="password" onChange={handleChange} onBlur={handleBlur} />
                            {errors.matKhau && touched.matKhau && (<small className="text-danger">{errors.matKhau}</small>)}
                        </div>
                        <div className="group">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email && (<small className="text-danger">{errors.email}</small>)}
                        </div>
                        <div className="group">
                            <label className="label">Số điện thoại</label>
                            <input name="soDt" type="text" className="input" onChange={handleChange} onBlur={handleBlur} />
                            {errors.soDt && touched.soDt && (<small className="text-danger">{errors.soDt}</small>)}
                        </div>
                        <div className="group">
                            <input type="submit" className="button" defaultValue="Sign Up" />
                        </div>
                        <div className="hr" />

                    </div>
                </form>
            </>
        )
    }
    // refresh error when user change tab
    componentDidMount() {
        this.props.dispatch(actSignupRequest())
    }
}

const SignUpWithFormik = withFormik({
    mapPropsToValues: () =>
    ({
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP10",
        maLoaiNguoiDung: "khachHang",
    }),

    validationSchema: Yup.object().shape({
        hoTen: Yup.string().required('Please input your name!!!').matches("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", " Your name must contain only letters!!!!"),
        taiKhoan: Yup.string().required('Please input Username!!!'),
        matKhau: Yup.string().required('Please input password!!!'),
        email: Yup.string().required('Please input email!!!').email('Email is valid!!!'),
        soDt: Yup.number("Your Numver must contain only number!!!").required('Please input phone number!!!'),
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(actSignup(values, props.history))
    },

})(SignUp);

const mapStateToProps = state => ({
    errorSignUp: state.authReducer.errorSignUp
})
export default connect(mapStateToProps)(SignUpWithFormik);