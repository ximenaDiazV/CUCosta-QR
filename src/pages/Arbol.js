import { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from './SeccionTabla'
import BttonAgregarArbol from '../components/CrearArbol/BttonAgregarArbol';
import { Stack } from 'react-bootstrap';


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

    return(
    <>    
        <div style={{ padding:100, width:"100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf:'center',
            flexDirection: 'column',
        }}>
            <DataTable/>
            <BttonAgregarArbol/>
        </div>
    </>
    )
}

export default Arbol