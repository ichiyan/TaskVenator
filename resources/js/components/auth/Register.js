import { React, useEffect, useState, Link, useNavigate, axios} from "../../index";
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();

    const [registerUser, setRegisterUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        error_list: [],
    });

    const inputHandler = (e) => {
        e.persist();
        setRegisterUser({
            ...registerUser,
            [e.target.name]: e.target.value
        });
    }

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        const data = {
            name: registerUser.name,
            email: registerUser.email,
            password: registerUser.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    Swal.fire({text: res.data.message, icon: "success"});
                    navigate('/character_customization');
                }else{
                    setRegisterUser({
                        ...registerUser,
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
                        <img src="assets/images/female-warrior.png" className="signup-signin-card-img-top register-img"/>
                        <img src="assets/images/pixel-grassfield.png" className="signup-signin-card-img"/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <p className="signup-signin-card-description">Sign up</p>
                            <form onSubmit={registerSubmitHandler}>
                                <div className="form-group signup-signin-form-group">
                                    <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" onChange={inputHandler} value={registerUser.name}/>
                                    <span className="error-msg">{registerUser.error_list.name}</span>
                                </div>
                                <div className="form-group signup-signin-form-group">
                                    <input type="email" className="form-input" name="email" id="email" placeholder="Email" onChange={inputHandler} value={registerUser.email}/>
                                    <span className="error-msg">{registerUser.error_list.email}</span>
                                </div>
                                <div className="form-group signup-signin-form-group">
                                    <input type="password" className="form-input" name="password" id="password" placeholder="Password" onChange={inputHandler} value={registerUser.password}/>
                                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                                    <span className="error-msg">{registerUser.error_list.password}</span>
                                </div>
                                <div className="form-group signup-signin-form-group">
                                    <input type="password" className="form-input" name="confirm_password" id="password" placeholder="Confirm Password" onChange={inputHandler} value={registerUser.confirm_password}/>
                                    <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
                                </div>
                                <div className="form-group signup-signin-form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <Link to="#" className="term-service" style={{color: "blue"}}>Terms of service</Link></label>
                                </div>
                                <div className="form-group signup-signin-form-group">
                                    <input type="submit" name="submit" id="submit" className="form-submit submit" value="Sign up"/>
                                    <Link to="/login" className="submit-link submit">Sign in</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;
