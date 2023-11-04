import { Link } from "react-router-dom";
import { HeaderEl } from "./Header.styled"
import logo from "../../../assets/logo.svg"
const Header = () => {
  return <HeaderEl>
    <Link to={"/"}>
      <img src={logo} alt="logo"/>
    </Link>
  </HeaderEl>
};
export default Header;