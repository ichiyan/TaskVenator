import axios from "axios";
import React, { useEffect, useRef, useState, useContext } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faCommentDots, faSignOutAlt, faUser, faUserAlt, SocketContext } from '../../index';
import TasksNavbar from "./TasksNavbar";
import HomeNavbar from "./HomeNavbar";
import { useSocket } from "../contexts/SocketProvider";

const Header = ({page}) => {

    // const socket = useSocket()

    const navigate = useNavigate();
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const ref = useRef();
    

    // useEffect( () => {
    //     console.log("test from header")
    //     console.log(socket)
    //     if(socket){
    //         socket.on('updateUserStatus', (data) => {
    //           console.log("PLS")
    //           console.log(data)
    //         });
    //     }
    // }, [socket])

    useEffect( () => {
        const checkIfClickedOutside = (e) => {
            if(isOpenDropdown && ref.current && !ref.current.contains(e.target)){
                setIsOpenDropdown(false);
            }
        }
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.removeEventListener("click", checkIfClickedOutside);
        }
    } , [isOpenDropdown]);

    const dropdownHandler = () => {
        setIsOpenDropdown(!isOpenDropdown);
    }

    const CustomDropDownMenu = () => {
        const CustomDropDownItem = ({leftIcon, rightIcon, text, link}) => {
            return (
                // <Link to={text === "Logout" ? '' : link} onClick={text === "Logout" ? logoutHandler : ''} className="custom-menu-item">
                <div onClick={text === "Logout" ? logoutHandler : null} className="custom-menu-item">
                    <span className="dropdown-icon-left">{leftIcon}</span>
                    <span className="custom-dropdown-item">{text}</span>
                    <span className="dropdown-icon-right">{rightIcon}</span>
                </div>
            );
        }
        return (
            <div className="custom-dropdown" ref={ref}>
                <CustomDropDownItem text="My Profile" leftIcon={<FontAwesomeIcon icon={faUserAlt}/>}/>
                <CustomDropDownItem text="Settings" leftIcon={<FontAwesomeIcon icon={faCog}/>}/>
                <CustomDropDownItem text="Logout" leftIcon={<FontAwesomeIcon icon={faSignOutAlt}/>}/>
            </div>
        );
    }

    const logoutHandler = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                console.log(res.data.message);
                navigate('/');
                location.reload();
            }
        });
    }

    let trailingButtons = '';
    var isLoggedIn = "false";
    if(!localStorage.getItem('auth_token')){
        trailingButtons = (
            <Link to="/register" className="get-started-btn">Get Started</Link>
        )
    }else{
        isLoggedIn = "true";
        trailingButtons = (
           <div>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li className="custom-nav-item">
                            <p className="text-light m-0">1000</p>
                        </li>
                        <li className="custom-nav-item">
                            <Link to="" className="nav-icon-btn">
                                <FontAwesomeIcon className="navIcon" icon={faBell}/>
                            </Link>
                        </li>
                        <li className="custom-nav-item">
                            <Link to="" className="nav-icon-btn">
                                <FontAwesomeIcon className="navIcon" icon={faUser} onClick={dropdownHandler}/>
                                {isOpenDropdown === true ? <CustomDropDownMenu/> : null}
                            </Link>
                        </li>
                    </ul>
                </nav>
           </div>
        )
    }

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                 <h1 className="logo"><Link to="/">TaskVenator</Link></h1>
                 {page === "home" ? <HomeNavbar isLoggedIn={isLoggedIn}/> : <TasksNavbar active={page}/>}
                 {trailingButtons}
            </div>
        </header>
    );
}

export default Header;

