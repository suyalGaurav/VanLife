import './header.css'
import { Link, useLocation, NavLink } from 'react-router-dom'

function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <Link to="/" >
                <h1>#VANLIFE</h1>
            </Link>
            <nav className='nav'>
                <NavLink to="/host" className={({isActive})=> isActive ? "nav-link-active" : ""}>Host</NavLink>

                {/* <Link to="/about" className={location.pathname === "/about" && "nav-link-active"}>About</Link> */}
                <NavLink to="/about" className={({isActive})=> isActive ? "nav-link-active" : ""}>About</NavLink>

                <NavLink to="/vans" className={({isActive})=> isActive ? "nav-link-active" : ""}>Vans</NavLink>

            </nav>
        </header>
    )
}

export default Header