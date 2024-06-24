import react, { useEffect, useState } from 'react'
import { DiVim } from 'react-icons/di'
import axios from 'axios'
const Arbol = () => {

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


    return(
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
    )
}

export default Arbol