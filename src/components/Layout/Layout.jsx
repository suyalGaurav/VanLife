import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Layout() {
    return (
        <>
            <Header />
            <section className="layout-outlet">
                <Outlet /> {/*The Outlet component serves as a placeholder where child routes can be rendered.*/}
            </section>
            <Footer />
        </>
    )
}