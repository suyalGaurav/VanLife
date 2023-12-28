import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../../../../api"
import "./hostVans.css"
import { requireAuth } from "../../../../../utils"


export async function loader() {
    await requireAuth()
    return getHostVans()
}

export default function HostVans() {
    const hostVans = useLoaderData()

    const hostVansList = hostVans.map((hostVan) => {
        return (
                <Link to={hostVan.id} className="host-van" key={hostVan.id}>
                    <div className="host-van-image-and-detail">
                        <img src={hostVan.imageUrl} alt="" />
                        <div className="host-van-detail">
                            <h1>{hostVan.name}</h1>
                            <p className="secondary-text">${hostVan.price}/day</p>
                        </div>
                    </div>
                </Link>
        )
    })

    return (
        <section className="host-vans-section">
            <h1>Your listed vans</h1>
            <div className="host-vans-list">
                {hostVansList}
            </div>
        </section>
    )  
}