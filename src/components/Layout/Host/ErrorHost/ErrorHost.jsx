
import { useRouteError } from "react-router-dom"
import './errorHost.css'

export default function ErrorHost() {
    const error = useRouteError()

    return (
        <section className="error-host">
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