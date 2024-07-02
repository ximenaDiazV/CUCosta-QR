// ---------------  PAGINA PRINCIPAL - BARRA DEL NAVEGADOR.
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

// ---------------  BARRA DEL NAVEGADOR.
//NAVEGADOR.
export const Nav = styled.nav`
    background: #FFFFFF;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    z-index: 100;
    margin-top: 0px;
    align-items: center;
    border-bottom: 2px solid black; /* Línea diferenciadora de NavBar */
    position: fixed;

    @media (max-width: 1000px) {
        flex-direction: column;
        height: auto;
        padding: -0.1rem 0rem;
  }
`;

//BOTON DE LA PAGINA ACTUAL - LINK.
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #15cdfc;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 0.5rem 0rem;
  }
`;

//BOTON EXPLORAR.
export const NavBtnLink = styled(Link)`
    display: flex;
    align-items: center;
    border-radius: 25px;
    background: #83C5BE;
    padding: 15px 22px;
    color: #111111;
    font-size: 24px;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 80px;
    width: 130px;

    &:hover {
        background: #006D77;
        color: #FFFF;
        font-weight: bold;
    }
    &:active,
    &:focus {
        background: #006D77;
        color: #FFFF;
        font-weight: bold;
    }

    @media (max-width: 1000px) {
        margin: 0rem 0;
     }
`;


// ---------------  LOGOS
//LOGO DE LA BARRA DEL NAVEGADOR.
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    margin-left: 30px;
    img {
        height: 70px;
        width: auto;
    }

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

//LOGO DEL LOGIN.
export const Logo2 = styled(Link)`
    display: flex;
    margin: 0 1rem;
    cursor: pointer;
    img {
        height: 80px;
        width: auto;
    }

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

// ---------------  ICONOS.
//ICONO DE CERRAR - POP UP LOGIN.
export const IconClose = styled(Link)`
    display: flex;
    margin: 0 1rem;
    img {
        height: 25px;
        width: auto;
    }

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

export const Icon = styled.div`
    margin-left: 10px;
    align-item: center;
    margin-bottom: -10px;
    font-size: 29px;

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

// ---------------  DROPDOWN MENU
//MENU.
export const SearchBarWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

export const SearchIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #111;
    cursor: pointer;
    background-color: #83c5be;
    border-radius: 50%;
    padding: 2px;
    height: 3.2vh;
    width: 1.8vw;
    display: flex; /* Para centrar el contenido dentro del div */
    justify-content: center;
    align-items: center;

    img {
        height: 80%;
        width: 80%;
    }
`;

export const SearchBar = styled.input`
    width: 500px;
    height: 40px;
    border: 3px solid black;
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 60px;
    font-size: 19px;
    margin-left: -300px;

    @media (max-width: 1000px) {
        width: 100%;
        margin: 1rem 0;
    }
`;


// ---------------  DROPDOWN MENU
//MENU.
export const DropdownMenu = styled.div`
    position: absolute;
    top: 100px;
    background: #83C5BE;
    border-radius: 20px;
    padding: 17px 17px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
    z-index: 200;
    margin-left: -30px;
    height: 180px;
    width: 200px;

    @media (max-width: 1000px) {
        top: auto;
        bottom: 100px;
        margin-right: 2rem 0;
        right: 50%;
        transform: translateX(-50%);
    }
`;

//ITEM.
export const DropdownItem = styled(Link)`
    color: #000000; /* Color negro */
    font-weight: bold; /* Texto en negritas */
    padding: 5px 10px;
    text-decoration: none;
    display: block;
    font-size: 20px;
    text-align: right;
    height: 35px;

    &:hover {
        background: #006D77;
        color: #FFFFFF;
        font-weight: bold;
        border-radius: 10px;
    }
`;

// ---------------  LOGIN
//CAJA DEL LOGIN.
export const LoginWrapper = styled.div`
    background: #83C5BE;
    border-radius: 40px;
    width: 310px;
    height: 300px;
    margin: 0 1rem;

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;

//CONTENEDOR FONDO DE LA CAJA DEL LOGIN.
export const BoxLoginWrapper = styled.div`
    background: #092327;
    border-radius: 40px;
    width: 320px;
    height: 300px;
    margin: 1rem;

    @media (max-width: 1000px) {
        margin: 1rem 0;
    }
`;