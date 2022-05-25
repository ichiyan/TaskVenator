import React from "react";
import {Link} from 'react-router-dom';


const Footer = () => {
    return(
        <div>
            <footer>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="container col-md-offset-3">
                        <h3><b>TaskVenator</b></h3>
                    </div>
                    <div className="container col-md-offset-3">
                        <h4><b>MENU</b></h4>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="">FAQs</Link></li>
                            <li><Link to="">Pricing</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="container col-md-offset-3">
                        <h4><b>CONTACT US</b></h4>
                        <b>ADDRESS</b><br></br>Cebu City, Cebu, Philippines<br></br>
                        <b>PHONE</b><br></br>(123)456-7890<br></br>
                        <b>EMAIL</b><br></br>taskvenator@gmail.com
                    </div>
                    <div className="container col-md-offset-3">
                        <h4><b>FOLLOW US</b></h4>
                        <i class="fa-brands fa-twitter-square"></i>Facebook<br></br>
                        <i class="fa-brands fa-twitter-square"></i>Twitter<br></br>
                        <i class="fa-brands fa-instagram-square"></i>Instagram<br></br>
                    </div>
                </div>
                <br></br><hr></hr>
                <p>&copy;TaskVenator 2022</p>
            </footer>
        </div>
    );
}

export default Footer;