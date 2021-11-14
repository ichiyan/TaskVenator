import React, { useEffect } from "react";

import Header from "../layouts/Header";


const Register = () => {

    useEffect(() => {
        particlesJS.load('particles-js', 'particles.json');
    }, []);

    return (
        <div>
           <Header/>
           <div id="particles-js"></div>
                <div className="container signup-signin">
                    <div className="card signup-signin-card">
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <img src="assets/images/female-warrior.png" className="signup-signin-card-img-top"/>
                                <img src="assets/images/pixel-grassfield.png" className="signup-signin-card-img"/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <p className="signup-signin-card-description">Sign up</p>
                                    <div class="form-group">
                                        <input type="text" class="form-input" name="name" id="name" placeholder="Your Name"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-input" name="email" id="email" placeholder="Email"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
                                        <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="submit" id="submit" class="form-submit submit" value="Sign up"/>
                                        <a href="#" class="submit-link submit">Sign in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           {/* </div> */}
        </div>
    );
}

export default Register;
