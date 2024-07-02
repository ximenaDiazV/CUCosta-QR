import React from 'react';

const Dashboard = ({ user, token }) => {
    console.log(user, token, " dash"); //Quitar debug
    return (
        <div>
            <h2>Welcome, {user}</h2>
        </div>
    );
};

export default Dashboard;