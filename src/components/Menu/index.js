import React from 'react';
import Logo from '../../assets/img/Logo.png'; 
import './menu.css'
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function menu()
{   
    return(
        <nav className = "menu">   
            <a href="/">
            <img className="Logo" src = {Logo} alt="Nakaflix"/>   
            </a>    


            <Button as="a" className="ButtonLink" href="/">
            Botão de Link
            </Button>
        </nav>
    );
}

export default menu;