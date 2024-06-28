import React from 'react';

const Dashboard = ({ user, token }) => {
    const isAdmin = user.role === 'admin';
    console.log(user, token, " dash"); //Quitar debug
    return (
        <div>
            <h2>Welcome, {user}</h2>
            {isAdmin && <p>You have admin privileges.</p>}
        </div>
    );
};

export default Dashboard;