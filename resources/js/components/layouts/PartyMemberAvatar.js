import React from "react";

const PartyMemberAvatar = () => {

    const avatarHandler = () => {
        console.log(test);
    }

    return(
        <div className="avatar-img-space d-flex" onClick={avatarHandler}>
            <span className="party-member">
                <span className="party-member-username">usernameqwertyqwerty</span>
                <span><img className="avatar-img align-self-center" src="assets/images/avatar-male-warrior.png"/></span>
            </span>
        </div>
    );
}

export default PartyMemberAvatar;
