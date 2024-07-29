import React from 'react';
import DataTable from './SeccionTabla'
import BttonAgregarArbol from '../components/CrearArbol/BttonAgregarArbol';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user, token }) => {
    console.log(user, token, " dash"); //Quitar debug

    return (
        <>
            {/* Un p para el nombre del usuario */}
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
    );
};

export default Dashboard;