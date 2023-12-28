import LoginStyle from './loginStyledComponent.jsx'
import { NavLink, useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../../../api.js"

export function loader( { request } ) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch(error) {
        return error.message
    }
}

export default function Login() {
    const authMessage = useLoaderData()
    const errorMessage = useActionData();
    const navigation = useNavigation()

    return (
        <LoginStyle>
            <h1>Sign in to your account</h1>
            {authMessage && <h3 className="auth-message">{authMessage}</h3>}
            {errorMessage && <h3 className="error-message">{errorMessage}</h3>}
            <Form method="post" replace>
                <div className="form-input">
                    <input id="email" name="email" type="text" placeholder="Email" />
                </div>
                <div className="form-input">
                    <input id="password" name="password" type="text" placeholder="Password" />
                </div>
                <button disabled={navigation.state === "submitting"}>
                    {   navigation.state === "submitting" 
                            ? "Logging in..." 
                            : "Log in"
                    }
                </button>
            </Form>
            <div className="new-account">
                <span>Don't have an account?</span>
                <NavLink to="/">Create one now</NavLink>
            </div>
        </LoginStyle>
    )
}