import './error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <section className='error'>
            <h3 className='error-logo'>¯\_(ツ)_/¯</h3>
            <h1 className='error-msg'>Sorry, the page you were looking for was not found.</h1>
                <Link className='return-btn' to="/home">
                    <button >
                        Return to home
                    </button>
                </Link>
        </section>
    )
}

export default Error