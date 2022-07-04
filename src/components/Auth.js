import { Navigate, Outlet } from 'react-router-dom';

export function Auth(isLogged) {
    return isLogged ? <Outlet /> : <Navigate to='/' />
}