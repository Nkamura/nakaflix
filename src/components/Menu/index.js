import React from "react";
import Logo from "../../assets/img/Logo.png";
import "./menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

//import ButtonLink from './components/ButtonLink';

function menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Nakaflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Botão de Link
      </Button>
    </nav>
  );
}

export default menu;
