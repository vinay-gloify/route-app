import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = ({ logout }) => {
    let navigate = useNavigate();
    let { userId } = useParams();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <h3>Profile Page for userId - {userId} <button onClick={() => { navigate("/"); }}>Logout</button></h3>
        </div>
    )
}

export default Profile;