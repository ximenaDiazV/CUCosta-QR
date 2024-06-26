import { useEffect, useState } from 'react'
import axios from 'axios'
const Arbol = () => {
    {/* traer datos mysql*/}
    const [plantas, setplantas] = useState([])
    useEffect(()=>{
        const fecthAllplantas = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/plantas")
                setplantas(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fecthAllplantas()
    },[])
    
    {/* post metod -> datos mysql*/}
    const [user, setUser] = useState({
        user: "",
        pass: "",
    });

    const handleChange=(e) =>{
        setUser(prev=>({...prev, [e.target.name]: e.target.value}))
    };
    console.log(user)

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/conect", user)
        }catch(err){
            console.log(err)
        }
    }

    return(
    <div>
        <div className='form'>
            <h1>login</h1>
            <input type="text" placeholder='user' onChange={handleChange} name="user"/>
            <input type="text" placeholder='pass' onChange={handleChange} name="pass"/>
            <button onClick={handleClick} >login</button>
        </div>
        <div>
        {plantas.map(planta=>(
            <div>
                <h2>
                    {planta.idplanta}
                </h2>
                <h2>
                    {planta.name}
                </h2>
            </div>
        ))}
        </div>
    </div>
    )
}

export default Arbol