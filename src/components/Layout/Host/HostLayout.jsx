
import {Outlet, NavLink } from "react-router-dom";
import "./hostLayout.css";

export default function HostLayout() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
 

    return (
        <section className="host-layout">
            <nav className="host-nav">
                <div className="host-nav-main">
                    <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>Dashboard</NavLink>
                    <NavLink to="income"  style={({isActive}) => isActive ? activeStyles : null}>Income</NavLink>
                    <NavLink to="vans"    style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink> {/* yet to be worked on */}
                    <NavLink to="reviews" style={({isActive}) => isActive ? activeStyles : null}>Reviews</NavLink>
                </div>
            </nav>
            <div className="host-outlet">
                <Outlet/>
            </div>
        </section>
    )
}