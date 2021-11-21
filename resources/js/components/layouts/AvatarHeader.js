import React from "react";
import AvatarImage from "./AvatarImage";

const AvatarHeader = () => {
    return (
        <div className="avatar-header d-flex">
            <div className="container avatar d-flex align-items-center">
                <AvatarImage/>
            </div>
        </div>
    );
}

export default AvatarHeader;
