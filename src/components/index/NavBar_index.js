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
                                {user && <DropdownItem to="/dashboard">Administrador</DropdownItem>}
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
                        top: '57%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '20px',
                        width: '90%',
                        maxWidth: '27vw',
                        height: '90%',
                        maxHeight: '75vh',
                        padding: '20px',
                        background: '#FFFFFF',
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
                        marginTop: 100,
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
                                marginTop: 65,
                                marginLeft: 29,
                                marginBottom: "-3vh",
                            }}>
                            _
                        </p>
                        <p
                            style={{
                                color: "#11111",
                                fontWeight: "bold",
                                fontSize: 16,
                                marginBottom: "1px",
                                marginLeft: "2.2vw",
                                marginTop: "2vh",
                                
                            }}>
                            Correo electrónico:
                        </p>

                        <input 
                            style={{ 
                                width: "90%",
                                maxWidth: "230px",
                                height: "29px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderWidth: "1.5px",
                                borderColor: "#11111",
                                outlineColor: "#11111",
                                outlineStyle: "ridge",
                                outlineWidth: "2.5px",
                                borderRadius: "30px",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                                fontSize: "14px",
                                display: "block",
                                marginBottom: "10px",
                                marginTop: "1vh",
                                }}

                            type="Correo" placeholder="Correo electrónico" value={username} onChange={(e) => setUsername(e.target.value)} required />

                        <p
                            style={{
                                color: "#11111",
                                fontWeight: "bold",
                                fontSize: 16,
                                marginLeft: "2.2vw",
                                marginTop: "20px",
                                marginBottom: "8px",
                                
                            }}>
                            Contraseña:
                        </p>
                        <input 
                            style={{ 
                                width: "90%",
                                maxWidth: "230px",
                                height: "29px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderWidth: "1.5px",
                                borderColor: "#11111",
                                outlineColor: "#11111",
                                outlineStyle: "ridge",
                                outlineWidth: "2.5px",
                                borderRadius: "30px",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                                fontSize: "14px",
                                display: "block",
                                marginBottom: "10px",
                            }}

                            type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required  />
                    
                        <button 
                            type="submit"
                            style={{ 
                                borderRadius: "30px",
                                height: "46px",
                                width: "150px",
                                marginTop: "5vh",
                                marginLeft: "auto",
                                marginRight: "auto",
                                background: "#092327",
                                color: "#FFFFFF",
                                fontWeight: "bold",
                                cursor: "pointer",
                                fontSize: "16px",
                                display: "block",
                                marginBottom: "10px",
                            }}
                        >
                             Login In
                        </button>
                            {error && <Alert severity="error">{error}</Alert>}
                    </LoginWrapper>
                </form>
            </Modal>
        </>
    );
};

export default Navbar;
