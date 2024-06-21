// components/Navbar/navbarElements.js
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// Estilo para la barra de navegación.
export const Nav = styled.nav`
    background: #EDF6F9;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
    /* Third Nav */
    /* justify-content: flex-start; */
`;

//Estilos para el link de la página en la que NO se esta actualmente.
export const NavLink = styled(Link)`
    color: #E29578; /* Cambia de color si no es la pagina seleccionada*/
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #1111;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 490px;

    /* Second Nav */
    /* margin-right: 2px; */



  white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -2px;
    /* Third Nav */
    /* justify-content: flex-end;
  width: 100vw; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 20px;
    height: 30px;
    background: #EDF6F9;
    padding: 10px 22px;
    color: #006D77;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    /* Second Nav */
    margin-left: 5px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #006D77;
        color: #EDF6F9;
    }
`;
