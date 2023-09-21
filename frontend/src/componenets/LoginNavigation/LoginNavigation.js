import "./LoginNavigation.css";
import { Link } from "react-router-dom";

function LoginNavigation() {
  return (
    <nav className="loginnav">
      <div className="loginnav__list">
        <Link to="/signup" className="loginnav__link loginnav__link_signup"> Регистрация</Link> 
        <Link to="/signin" className="loginnav__link loginnav__button">Войти</Link>
      </div>
    </nav>
  );
}

export default LoginNavigation;