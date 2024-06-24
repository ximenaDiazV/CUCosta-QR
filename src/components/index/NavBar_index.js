import React, { useState } from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtnLink,
    Logo,
    SearchBar,
    SearchBarWrapper,
    SearchIcon,
    DropdownMenu,
    DropdownItem,
} from "./NavBar_Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de búsqueda de Font Awesome

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <>
            <Nav>
                <Logo to="/">
                    <img src="/logoCUC.png" alt="Logo" />
                </Logo>

                <SearchBarWrapper>
                    <SearchBar type="text" placeholder="Buscar..." />
                    <SearchIcon>
                        <FontAwesomeIcon icon={faSearch} />
                    </SearchIcon>
                </SearchBarWrapper>

                <NavMenu>
                    <div>
                        <NavBtnLink to="#" onClick={toggleDropdown}>
                            Explorar
                        </NavBtnLink>
                        {dropdown && (
                            <DropdownMenu>
                                <DropdownItem to="/glosario-botanico">Glosario Botánico</DropdownItem>
                                <DropdownItem to="/acerca">Acerca</DropdownItem>
                                <DropdownItem to="/signin">Sign In</DropdownItem>
                                <DropdownItem to="/logout">Log Out</DropdownItem>
                            </DropdownMenu>
                        )}
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
