import axios from "axios";
import Swal from 'sweetalert2'
import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [invalidCredentialsMsg, setInvalidCredentialsMsg] = useState('');

    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const inputHandler = (e) => {
        e.persist();
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value,
        });
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const data = {
            email: loginUser.email,
            password: loginUser.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            console.log(response);
            axios.post(`api/login`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    console.log(res.data.message);
                    navigate('/tasks');
                }else if (res.data.status === 401){
                    setInvalidCredentialsMsg(res.data.message);
                }else{
                    setLoginUser({
                        ...loginUser,
                    error_list: res.data.validation_errors,
                    });
                }
            });
        });
    }

    return (
        <div className="container signup-signin">
            <div className="card signup-signin-card">
                <div className="row">
                    <div className="col-md-5">
                        <img src="assets/images/avatar-mage.png" className="signup-signin-card-img-top login-img"/>
                        <img src="assets/images/pixel-grassfield.png" className="signup-signin-card-img"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <p className="signup-signin-card-description">Log in</p>
                            <form onSubmit={loginSubmitHandler}>
                                <div className="form-group signup-signin-form-group">
                                    <input type="email" className="form-input" name="email" id="email" placeholder="Email" onChange={inputHandler} value={loginUser.email}/>
                                    <span className="error-msg">{loginUser.error_list.email}</span>
                                </div>
                                <div className="form-group signup-signin-form-group">
                                    <input type="text" className="form-input" name="password" id="password" placeholder="Password" onChange={inputHandler} value={loginUser.password}/>
                                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                                    <span className="error-msg">{loginUser.error_list.password}</span>
                                </div>
                                {invalidCredentialsMsg === '' ? null : <span className="error-msg">{invalidCredentialsMsg}</span>}
                                <div className="form-group signup-signin-form-group">
                                    <Link to="" className="forgot-password">Forgot password</Link>
                                </div>
                                <br/>
                                <div className="form-group signup-signin-form-group">
                                    <input type="submit" name="submit" id="submit" className="form-submit submit" value="Log in"/>
                                    <Link to="/register" className="submit-link submit">Sign up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
