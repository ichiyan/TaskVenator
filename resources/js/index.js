export {Link, useNavigate} from 'react-router-dom';
export {default as React} from "react";
export {default as ReactDOM} from 'react-dom';
export {default as $} from "jquery";
export { useEffect, useState, useRef, useCallback, useContext, Fragment } from "react";
export { default as axios } from "axios";
export { default as io } from "socket.io-client";
export { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export { faBell, faCog, faCommentDots, faSignOutAlt, faUser, faUserAlt, faPaperPlane, faInfoCircle, faCircle, faSquareFull, faMars, faVenus, faEye, faCut, faMale} from '@fortawesome/free-solid-svg-icons'
export {Swal} from 'sweetalert2';
export {default as ReactTooltip} from 'react-tooltip';
export {default as Carousel} from 'react-elastic-carousel';
export { default as moment } from 'moment-timezone';

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
export {default as Footer} from "./components/layouts/Footer";
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
export {default as CharacterCustomization} from "./components/pages/customization/CharacterCustomization";
export {default as SelectionTab} from "./components/pages/customization/SelectionTab";

export {default as Inventory} from "./components/pages/inventory/inventory";
export {default as InventoryOutfit} from "./components/pages/inventory/InventoryOutfit";
export {default as InventoryPotions} from "./components/pages/inventory/InventoryPotions";
export {default as InventoryWeapons} from "./components/pages/inventory/InventoryWeapons";

export {default as GroupMemberPublicTasks} from "./components/pages/tasks/GroupMemberPublicTasks";
export {default as HomeDailyTasks} from "./components/pages/tasks/HomeDailyTasks";
export {default as HomeTasks} from "./components/pages/tasks/HomeTasks";
export {default as TaskItem} from "./components/pages/tasks/TaskItem";

export {default as Contact} from "./components/pages/home/Contact";
export {default as About} from "./components/pages/home/About";
export {default as Features} from "./components/pages/home/Features";

export {default as Auth} from "./components/pages/Auth";
export {default as Home} from "./components/pages/Home";
export {default as Tasks} from "./components/pages/Tasks";
export {default as TasksTab} from "./components/pages/TasksTab";

 /*--------------------------------------------------------------
# Contexts
--------------------------------------------------------------*/

export { SocketProvider } from "./components/contexts/SocketProvider";
export { useSocket } from "./components/contexts/SocketProvider";

 /*--------------------------------------------------------------
# Helper Functions
--------------------------------------------------------------*/

export { getCurrentTime, getCurrentDateTime,dateTimeWithSecondsFormat, dateTimeFormat,  timeFormat } from './helper';

