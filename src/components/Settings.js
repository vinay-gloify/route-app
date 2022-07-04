import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Settings = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
                <Link to="/settings/feature">Feature Setting</Link>
                <Link to="/settings/updated">Updated Setting</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Settings;