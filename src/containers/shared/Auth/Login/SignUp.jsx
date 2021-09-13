import React, { Component } from 'react'
import { withFormik } from 'formik'
import { connect } from 'react-redux'
import { actSignup } from '../module/action';


class SignUp extends Component {       
    render() {
        const {           
            handleChange,
            handleSubmit,          
        } = this.props;       
        const {error} = this.props.signupState;
        return (            
            <>
                <form onSubmit = {handleSubmit}>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="pass" className="label">Họ Tên</label>
                            <input id="pass" name="hoTen" type="text" className="input" onChange = {handleChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="user" className="label">Tài khoản</label>
                            <input id="user" name="taiKhoan" type="text" className="input" onChange = {handleChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Mật khẩu</label>
                            <input id="pass" name="matKhau" type="password" className="input" data-type="password" onChange = {handleChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="label">Email</label>
                            <input id="email" name="email" type="email" className="input"  onChange = {handleChange}/>
                        </div>
                        <div className="group">
                            <label htmlFor="soDt" className="label">Số điện thoại</label>
                            <input id="soDt" name="soDt" type="text" className="input" onChange = {handleChange}/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" defaultValue="Sign Up" />
                        </div>
                        <div className="hr" />
                        {/* <div className="foot-lnk">
                            <label htmlFor="tab-1">Already Member?
                            </label></div> */}
                    </div>
                </form>
            </>
        )
    }
}

const SignupWithFormik = withFormik({
    mapPropsToValues: () =>
    ({
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP10",
        maLoaiNguoiDung : "khachHang",
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

    handleSubmit: (values, { props, setSubmitting }) => {
        props.dispatch(actSignup(values, props.history))        
    },
    
})(SignUp);

const mapStateToProps = state => ({
    signupState : state.authReducer
})
export default connect(mapStateToProps)(SignupWithFormik);