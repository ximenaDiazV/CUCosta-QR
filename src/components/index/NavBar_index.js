import React, { useState } from "react";
import {
    Nav,
    NavMenu,
    NavBtnLink,
    Logo,
    SearchBar,
    SearchBarWrapper,
    SearchIcon,
    DropdownMenu,
    DropdownItem,
    SignInBtn,
} from "./NavBar_Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de búsqueda de Font Awesome
import Modal from "react-modal";

const Navbar = () => {
    //Menu desplegable.
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    //Modal pop up Login.
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
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
                                <DropdownItem to="#" onClick={openModal}>Sign In</DropdownItem>
                                <DropdownItem to="/logout">Log Out</DropdownItem>
                            </DropdownMenu>
                        )}
                    </div>
                </NavMenu>
            </Nav>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Sign In"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        height: 450,
                        width: 390,
                        borderRadius: 20,
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                    
                    
                }}
            >
                <h2>Bienvenid@ al glosario botánico CUCosta</h2>
                <form>
                    
                    
                    <SignInBtn to="#" onClick={closeModal}
                    style={{ 
                        bottom: '10px', 
                        }}>
                            Login In
                    </SignInBtn>
                </form>
            </Modal>
        </>
    );
};

export default Navbar;
