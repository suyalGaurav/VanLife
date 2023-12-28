
import React from "react"
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getVansById } from "../../../../../api"
import { requireAuth } from "../../../../../utils"
import "./hostVanDetailLayout.css"


export async function loader({ params }) {
    await requireAuth()
    const { id } = params
    return getVansById(id)
}

export default function HostVanDetailLayout() {
    const vanDetails = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <section className="host-van-detail-layout">
            <div className="host-van-detail-back-link">
                <span>&larr; </span>
                <Link to=".."
                    relative="path" > 
                    <span className="host-van-detail-back">
                        Back to all Vans
                    </span>
                </Link>
            </div>
            <div className="host-van-detail-layout-van">
                <div>
                    <div className="host-detail-layout-van-image">
                            <img src={vanDetails.imageUrl} alt="van image" />
                    </div>
                    <div className="host-detail-layout-van-details">
                        <p>Simple</p>
                        <h3>{vanDetails.name}</h3>
                        <p>
                            ${vanDetails.price}
                            <span>/day</span>
                        </p>
                    </div>
                </div>
                <nav>
                    <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>Details</NavLink>
                    <NavLink to="pricing" style={({isActive}) => isActive ? activeStyles : null}>Pricing</NavLink>
                    <NavLink to="photos"  style={({isActive}) => isActive ? activeStyles : null}>Photos</NavLink>
                </nav>
                <Outlet context={{ vanDetails }}/>
            </div>
        </section>
    )
}