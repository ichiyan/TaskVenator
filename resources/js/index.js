export {Link} from 'react-router-dom';
export {default as React} from "react";
export {default as ReactDOM} from 'react-dom';
export {default as $} from "jquery";
export { useEffect, useState, useRef, useCallback, Fragment } from "react";
export { default as axios } from "axios";
export { default as io } from "socket.io-client";
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export { faBell, faCog, faCommentDots, faSignOutAlt, faUser, faUserAlt, faPaperPlane, faCircle} from '@fortawesome/free-solid-svg-icons'
export {Swal} from 'sweetalert2';
export {default as ReactTooltip} from 'react-tooltip';

 /*--------------------------------------------------------------
# Auth
--------------------------------------------------------------*/

export {default as Login} from "./components/auth/Login";
export {default as Register} from "./components/auth/Register";

 /*--------------------------------------------------------------
# Layouts
--------------------------------------------------------------*/

export {default as AvatarHeader} from "./components/layouts/AvatarHeader";
export {default as Header} from "./components/layouts/Header";
export {default as HomeNavbar} from "./components/layouts/HomeNavbar";
export {default as PartyMemberAvatar} from "./components/layouts/PartyMemberAvatar";
export {default as TasksNavbar} from "./components/layouts/TasksNavbar";
export {default as Chat} from './components/layouts/Chat';


 /*--------------------------------------------------------------
# Pages
--------------------------------------------------------------*/

export {default as GroupTasks} from "./components/pages/party/GroupTasks";
export {default as Party} from "./components/pages/party/Party";


export {default as Shop} from "./components/pages/shop/All";
export {default as All} from "./components/pages/shop/All";
export {default as Outfit} from "./components/pages/shop/Outfit";
export {default as Potions} from "./components/pages/shop/Potions";
export {default as Weapons} from "./components/pages/shop/Weapons";
export {default as Cards} from "./components/pages/shop/Cards";
export {default as AddOutfitForm} from "./components/pages/shop/AddOutfitForm";
export {default as AddPotionForm} from "./components/pages/shop/AddPotionForm";
export {default as AddCardForm} from "./components/pages/shop/AddCardForm";

export {default as GroupMemberPublicTasks} from "./components/pages/tasks/GroupMemberPublicTasks";
export {default as HomeDailyTasks} from "./components/pages/tasks/HomeDailyTasks";
export {default as HomeTasks} from "./components/pages/tasks/HomeTasks";
export {default as TaskItem} from "./components/pages/tasks/TaskItem";

export {default as Auth} from "./components/pages/Auth";
export {default as Home} from "./components/pages/Home";
export {default as Tasks} from "./components/pages/Tasks";
export {default as TasksTab} from "./components/pages/TasksTab";

 /*--------------------------------------------------------------
# Helper Functions
--------------------------------------------------------------*/
export { default as moment } from 'moment-timezone';
export { getCurrentTime, getCurrentDateTime, dateFormat,  timeFormat } from './helper';
