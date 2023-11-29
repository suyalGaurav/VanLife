
import React, {useState, useEffect} from "react"
import {Link, NavLink, Outlet, useParams} from "react-router-dom"

import "./hostVanDetailLayout.css"

export default function HostVanDetailLayout() {
    const [vanDetails, setVanDetails] = useState({})
    const {id} = useParams();

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    useEffect(()=> {
        fetch(`/api/host/vans/${id}`)
        .then((res) => res.json())
        .then((data) => {
            if(data?.vans?.[0]) {
                setVanDetails(data.vans[0])    
            } else {
                console.log("Data doesn't exist")
            }
        })
        .catch((error)=> {
            console.log("Error getting data ", error);
        })
    }, [id])

    // useEffect(() => {
    //     console.log(vanDetails);
    // }, [vanDetails])
    

    return (
        <section className="host-van-detail-layout">
            <div className="host-van-detail-back-link">
                <span>{"<- "}</span>
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