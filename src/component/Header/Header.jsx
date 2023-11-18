import './header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <Link to= "/" >
                <h1>#VANLIFE</h1>
            </Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}

export default Header