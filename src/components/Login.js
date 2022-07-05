import { useState } from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(user);
        navigate('/', { replace: true })
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <label>
                Username : <input type="text" onChange={(e) => setUser(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;