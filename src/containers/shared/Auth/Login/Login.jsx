import React, { Component } from 'react'
import { withFormik } from 'formik'
import { actLoginRequest, actLogin } from '../module/action'
import { connect } from 'react-redux'
import Loader from 'components/Loader/Loader';
import * as Yup from 'yup'
import { USER_BOOKING_TICKET_LOGIN } from '../module/type';

class Login extends Component {

    render() {
        if (JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN))?.accessToken) {
            this.props.history.push("/")
        }
        const {
            handleChange,
            handleSubmit,
            loading,
            errorLogin,
            errors,
            touched,
            handleBlur
        } = this.props;
        if (loading) return <Loader/>
        return (
            <>
            
            {errorLogin && <div className = "text-danger text-center py-3">{errorLogin}</div>}
            <form onSubmit={handleSubmit}>
                <div className="sign-in-htm">
                    <div className="group my-3">
                        <label htmlFor="user" className="label">Username</label>
                        <input id="user" type="text" name="taiKhoan" className="input" onChange={handleChange} onBlur = {handleBlur} />
                        {errors.taiKhoan && touched.taiKhoan && (<small className = "text-danger">{errors.taiKhoan}</small>)}
                    </div>
                    <div className="group my-5">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="pass" type="password" name="matKhau" className="input" data-type="password" onChange={handleChange} onBlur = {handleBlur} />
                        {errors.matKhau && touched.matKhau && (<small className = "text-danger">{errors.matKhau}</small>)}

                    </div>

                    <div className="group mt-3">
                        <input type="submit" className="button" defaultValue="Sign In" />
                    </div>
                    <div className="hr" />

                </div>
            </form>
            </>
        )
    }

    componentDidMount() {
        this.props.dispatch(actLoginRequest()) 
    }
}

const LoginMovieWithFormik = withFormik({
  mapPropsToValues: () => ({ taiKhoan: "", matKhau: "" }),

    validationSchema : Yup.object().shape({
        taiKhoan : Yup.string().required('Please input your userName'),
        matKhau : Yup.string().required('Please input your password')

    }),
    
    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(values)
        props.dispatch(actLogin(values, props.history))
    },
})(Login);

const mapStateToProps = state => ({
    stateLogin: state.authReducer,
    loading : state.loading,
    errorLogin : state.authReducer.errorLogin
})


export default connect(mapStateToProps)(LoginMovieWithFormik);
