
import { useRouteError } from 'react-router-dom'
import './error.css'


export default function Error() {
    const error = useRouteError()

    return (
        <section className="error-section">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            { error?.message && 
                <p>
                    {error?.message}
                </p> 
            }
        </section>
    )
}