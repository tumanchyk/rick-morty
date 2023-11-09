import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.svg";

import { HeaderEl } from "./Header.styled";

const Header: React.FC = () => {
    return <HeaderEl>
        <Link to={"/"}>
            <img src={logo} alt="logo"/>
        </Link>
    </HeaderEl>;
};
export default Header;