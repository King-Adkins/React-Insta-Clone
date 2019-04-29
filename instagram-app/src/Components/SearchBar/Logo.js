import React from "react";
import './logo.css';

const Logo = props => {
    return (
        <div className = "logo">
            <span className = 'logo-image' />
            <div className = 'logo-separter' />
            <span className = 'logo-text' />
        </div>
    );
};

export default Logo;