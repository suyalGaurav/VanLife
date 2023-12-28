import './header.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("loggedin")
        navigate("/login")
    }

    return (
        <header className='header'>
            <Link to="/" >
                <h1>#VANLIFE</h1>
            </Link>
            <nav className='nav'>
                <NavLink to="host" className={({isActive})=> isActive ? "nav-link-active" : ""}>Host</NavLink>
                <NavLink to="about" className={({isActive})=> isActive ? "nav-link-active" : ""}>About</NavLink>
                <NavLink to="vans" className={({isActive})=> isActive ? "nav-link-active" : ""}>Vans</NavLink>
                <button onClick={logout}>Logout</button>
                <Link to="login" className='login-nav' >
                    <img src="/avatar-icon.png" alt="login" />
                </Link>
            </nav>
        </header>
    )
}

export default Header