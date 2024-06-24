import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
    background: #FFFFFF;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    align-items: center;
    border-bottom: 1px solid black; /* Línea diferenciadora de NavBar */
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

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    margin-right: 100px;
    margin-left: -180px;
    img {
        height: 80px;
        width: auto;
    }
`;


export const SearchBarWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const SearchIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #11111; /* Color del icono de búsqueda */
    cursor: pointer;
    background-color: #83C5BE;
    border-radius: 50%;
    padding: 7px 12px;
`;

export const SearchBar = styled.input`
    width: 500px;
    height: 42px;
    margin-left: -450px; 
    border: 2.5px solid black;
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 60px;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled(Link)`
    border-radius: 20px;
    background: #83C5BE;
    padding: 17px 30px;
    color: #111111;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 60px;
    margin-right: -200px;
    &:hover {
        background: #4E8098;
        color: #010606;
        font-weight: bold;
    }
    &:active,
    &:focus {
        background: #006D77;
        color: #FFFF;
        font-weight: bold;
    }
`;


export const DropdownMenu = styled.div`
    position: absolute;
    top: 85px;
    margin-left: 0px;
    background: #83C5BE;
    border-radius: 20px;
    padding: 10px 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const DropdownItem = styled(Link)`
    color: #000000; /* Color negro */
    font-weight: bold; /* Texto en negritas */
    padding: 10px 20px;
    text-decoration: none;
    display: block;
    text-align: right;
    &:hover {
        background: #0B5351;
        color: #FFFFFF;
        font-weight: bold;
        border-radius: 10px;
    }
`;

export const SignInBtn = styled(Link)`
    border-radius: 20px;
    bottom: -100px;
    background: #092327;
    padding: 10px 40px;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 80px;
    margin-right: -200px;
    padding-bottom: -10px;
`;

export const ShadowBoxLoginForm = styled.div`
    border-radius: 20px;
    background: #092327;
`;