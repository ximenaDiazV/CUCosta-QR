import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//BARRA DEL NAVEGADOR.
export const Nav = styled.nav`
    background: #FFFFFF;
    height: 90px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 100;
    margin-top: 0px;
    align-items: center;
    border-bottom: 2px solid black; /* Línea diferenciadora de NavBar */
    position: fixed;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #15cdfc;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

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
    margin-left: 130px;
    margin-right: -299px;
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
`;


// LOGO DE LA BARRA DEL NAVEGADOR - CUCOSTA.
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    margin-right: 100px;
    margin-left: -340px;
    img {
        height: 90px;
        width: auto;
    }
`;

// LOGO EN LOGIN - CUCOSTA.
export const Logo2 = styled(Link)`
    display: flex;
    margin-left: 100px;
    margin-top: 10px;
    cursor: pointer;
    img {
        height: 80px;
        width: auto;
    }
`;

// ICONOS ---------------------------------
export const IconClose = styled(Link)`
    display: flex;
    margin-left: 373px;
    margin-top: -90px;
    img {
        height: 25px;
        width: auto;
    }
`;

export const Icon = styled.div`
    margin-top: 11px;
    margin-right: -10px;
    margin-left: 6px; 
    font-size: 29px;
`;

// BARRA DE BUSQUEDA ------------------------------
export const SearchBarWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const SearchIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 28%;
    img {
        height: 28px;
        width: auto;
    }
    transform: translateY(-20%);
    color: #11111; /* Color del icono de búsqueda */
    cursor: pointer;
    background-color: #83C5BE;
    border-radius: 50%;
    padding: 5px 8px;
`;

export const SearchBar = styled.input`
    width: 500px;
    height: 48px;
    margin-left: -450px; 
    border: 3px solid black;
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 60px;
    font-size: 19px;
`;


// DROPDOWN - BOTÓN EXPLORAR -----------------------
export const DropdownMenu = styled.div`
    position: absolute;
    top: 100px;
    margin-left: 75px;
    background: #83C5BE;
    border-radius: 20px;
    padding: 30px 30px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
    z-index: 200;
`;

export const DropdownItem = styled(Link)`
    color: #000000; /* Color negro */
    font-weight: bold; /* Texto en negritas */
    padding: 10px 25px;
    margin-left: -5px;
    margin-right: -5px;
    text-decoration: none;
    display: block;
    font-size: 20px;
    text-align: right;
    &:hover {
        background: #0B5351;
        color: #FFFFFF;
        font-weight: bold;
        border-radius: 10px;
    }
`;


// CSS PARA LOGIN -------------------------
export const LoginWrapper = styled.div`
    background: #83C5BE;
    border-radius: 40px;
    width: 310px;
    height: 300px;
    margin-left: 55px;
    margin-top: -345px;
`;

export const BoxLoginWrapper = styled.div`
    background: #092327;
    border-radius: 40px;
    width: 320px;
    height: 300px;
    margin-left: 30px;
    margin-top: 40px;
`;