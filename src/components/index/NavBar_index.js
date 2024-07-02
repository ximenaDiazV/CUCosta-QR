import React, { useState, useRef, useEffect } from "react";
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
    LoginWrapper,
    BoxLoginWrapper,
    Logo2,
    Icon,
    IconClose,
} from "./NavBar_Elements";
import Modal from "react-modal";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {login} from './Auth'
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const Navbar = ({ setUser, setToken, user}) => {

    const navigate = useNavigate();
    //User
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Menu desplegable.
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const menuRef = useRef(null);
    const [icon, setIcon] = useState(TiArrowSortedDown);
    
    const toggleMenuDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
        setIcon(isOpenDropdown ? TiArrowSortedDown : TiArrowSortedUp);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpenDropdown(false);
            setIcon(TiArrowSortedDown);
        }
      };
    
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    //Modal pop up Login.
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setError(null); 
    };

     //funcion login
     const handleLogin = async (e) => {
        setError("");
        e.preventDefault();
        console.log("Entre a la funcion login");
        try {
            console.log(username,password);
            const data = await login(username, password);
            if (data.success) {
                console.log(data);
                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('user', JSON.stringify(data.username));
                setUser(data.username);
                setToken(data.token);
                console.log(data.username, "Entro succes");
                navigate('/dashboard');
                setModalIsOpen(false);
                setPassword(null)
                setUsername(null)
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.log(error, " catch");
            setError('Error logging in. Please try again later.');
        }
        //Activar dashboard 
    };

    //funcion logout 
    const handllogout = async (e) =>{
        e.preventDefault();
        console.log("Entre a la funcion logout");
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUser(null)
            setToken(null)
        }catch (error){
            console.log(error, " catch logout");
            setError('Error al salir. Por favor intentelo más tarde.');
        }
    };

    function changeButtonlogin(){
        if(user)
        {
            return <DropdownItem to="#" onClick={handllogout}>Log Out</DropdownItem>
        } 
        else{
            return <DropdownItem to="#" onClick={openModal}>Sign In</DropdownItem>
        }
        /*ocultar hasta que entre*/
    }



    return (
        <>
            <Nav>
                <Logo to="/">
                    <img src="/logoCUC.png" alt="Logo" />
                </Logo>

                <SearchBarWrapper>
                    <SearchBar type="text" placeholder="Buscar..." />
                    <SearchIcon>
                        <img src="/lupa.png" alt="SearchIcon" />
                    </SearchIcon>
                </SearchBarWrapper>

                <NavMenu>
                    <div ref={menuRef}>
                        <NavBtnLink to="#" onClick={toggleMenuDropdown} >
                            Explorar 
                            <Icon>
                                {isOpenDropdown ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                            </Icon>
                        </NavBtnLink>
                        {isOpenDropdown && (
                            <DropdownMenu>
                                <DropdownItem to="/glosario-botanico">Glosario Botánico</DropdownItem>
                                <DropdownItem to="/acerca">Acerca</DropdownItem>
                                {changeButtonlogin()}
                            </DropdownMenu>
                        )}
                    </div>
                </NavMenu>
            </Nav>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                appElement={document.getElementById('root')}
                contentLabel="Sign In"
                style={{
                    content: {
                        top: '55%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        height: 550,
                        width: 400,
                        borderRadius: 20,
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                    
                    
                }}
            >
                <Logo2>
                    <img src="/logoCUC.png" alt="Logo2" />
                </Logo2>
                <IconClose to="#" onClick={closeModal}>
                    <img src="/cerrar.png" alt="IconClose" />
                </IconClose>
                <h2
                style={{
                    fontWeight: "bold",
                    fontSize: 23,
                    marginTop: 90,
                    marginLeft: 5,
                    textAlign: "center",
                }}>
                    Bienvenid@ al glosario botánico CUCosta
                </h2>

                <form onSubmit={handleLogin}>
                    <BoxLoginWrapper>
                    </BoxLoginWrapper>
                    <LoginWrapper>
                        <p
                        style={{
                            opacity: -1,
                            fontWeight: "bold",
                            fontSize: 20,
                            marginTop: 60,
                            marginLeft: 30,
                        }}>
                            _
                        </p>
                        <p
                        style={{
                            color: "#11111",
                            fontWeight: "bold",
                            fontSize: 17,
                            marginTop: -25,
                            marginLeft: 28,
                        }}>
                            Correo electrónico:
                        </p>

                        <input 
                            style={{ 
                                width: 240,
                                height: 40,
                                marginLeft: 18,
                                marginTop: -7,
                                borderWidth: 1.5,
                                borderColor: "#11111",
                                outlineColor: "#11111",
                                outlineStyle: "ridge",
                                outlineWidth: 2.5,
                                borderRadius: 30,
                                paddingLeft: 14,
                                paddingRight: 14,
                                fontSize: 16,
                                }}

                        type="Correo" placeholder="Correo electrónico" value={username} onChange={(e) => setUsername(e.target.value)} required />

                        <p
                        style={{
                            color: "#11111",
                            fontWeight: "bold",
                            fontSize: 17,
                            marginLeft: 28,
                            marginTop: 23,
                        }}>
                            Contraseña:
                        </p>
                        <input 
                            style={{ 
                                width: 240,
                                height: 40,
                                marginLeft: 18,
                                marginTop: -7,
                                borderWidth: 1.5,
                                borderColor: "#11111",
                                outlineColor: "#11111",
                                outlineStyle: "ridge",
                                outlineWidth: 2.5,
                                borderRadius: 30,
                                paddingLeft: 14,
                                paddingRight: 14,
                                fontSize: 16,
                                }}

                        type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required  />
                    
                        <button to="#" type="submit"
                        style={{ 
                            borderRadius: 30,
                            height: 45,
                            width: 160,
                            marginTop: 35,
                            marginLeft: 80,
                            background: "#092327",
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: 19,
                            }}>
                                Login In
                        </button>
                            {error && <Alert severity="error"> 
                                {error}
                            </Alert>
                            }
                    </LoginWrapper>
                </form>
                

            </Modal>
        </>
    );
};

export default Navbar;
