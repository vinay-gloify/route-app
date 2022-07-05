import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

const Profile = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <h3>Welcome! {auth.user} <button onClick={handleLogout}>Logout</button></h3>
        </div>
    )
}

export default Profile;