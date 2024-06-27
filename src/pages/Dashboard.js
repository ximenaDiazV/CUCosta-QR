import React from 'react';

const Dashboard = ({ user }) => {
    const isAdmin = user.role === 'admin';
    console.log(user, " dash");
    return (
        <div>
            <h2>Welcome, {user}</h2>
            <p>Role: {user.role}</p>
            {isAdmin && <p>You have admin privileges.</p>}
        </div>
    );
};

export default Dashboard;