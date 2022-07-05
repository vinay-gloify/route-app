import { NavLink } from "react-router-dom";
import { useAuth } from './auth';

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',
        }
    }

    const auth = useAuth();

    return (
        <>
            <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
                {auth.user && (<NavLink to="/" style={navLinkStyles}>Home</NavLink >)}
                {auth.user && (<NavLink to="/profile" style={navLinkStyles}>Profile</NavLink >)}
                {auth.user && (<NavLink to="/settings" style={navLinkStyles}>Settings</NavLink >)}
                {!auth.user && (<NavLink to='/login' style={navLinkStyles}>Login</NavLink>)}
            </nav>
        </>
    )
}

export default Navbar;