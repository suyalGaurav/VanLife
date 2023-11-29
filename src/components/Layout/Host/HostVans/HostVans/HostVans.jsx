import React, {useState, useEffect} from "react"
import "./hostVans.css"
import { Link } from "react-router-dom"

export default function HostVans() {

    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
        .then((res) => res.json())
        .then((data)=> {
            setHostVans(data.vans)
        })
        .catch(error=> console.log("user doesn't host any vans ", error))
    }, [])

    // useEffect(()=> {
    //     console.log(hostVans)
    // }, [hostVans])

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