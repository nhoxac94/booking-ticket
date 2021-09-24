import React, { Component } from 'react'
import './LoginLayout.scss'
import withLayout from 'hoc/withLayout'
import { Link } from 'react-router-dom'



class LoginLayout extends Component {
    state = {
        checked : true,
    }
    handleChangeTitle(e) {
        console.log(e.target.name);
        if (e.target.name === "login") {
            this.setState({
                checked : true,
            })
        }
        if (e.target.name === "signUp") {
            this.setState({
                checked : false,
            })
        }
    }
    render() {
        
        return (
            <div className="container-fluid login-movie">
                <div></div>
                <div className="login-wrap">
                    <div className="login-html">
                        <div className="text-center " style={{ fontSize: 25 }}>
                            <Link to="/login" name = "login" className={`pr-3 ${this.state.checked && "checked"}`} onClick = {e => this.handleChangeTitle(e)}>LOG IN</Link>
                            <Link to="/sign-up" name = "signUp" className = {!this.state.checked && "checked"} onClick = {e => this.handleChangeTitle(e)} >SIGN UP</Link>
                        </div>
                        <div className="login-form">
                           {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withLayout(LoginLayout)