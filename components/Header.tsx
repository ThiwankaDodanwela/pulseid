import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <div className="hm-header">
            <div className="logo">
                <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={37}
                    height={28}
                />
            </div>
            <div className="profile">
                <div className="profile-details">
                    <div className="profile-details__name">Hi, John Doe</div>
                    <div className="profile-details__message">Welcome</div>
                </div>
                <div className="profile-image">
                    <Image
                        src="/images/johndeo.jpg"
                        alt="Profile image"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
