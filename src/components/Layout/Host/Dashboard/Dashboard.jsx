import React, {useState, useEffect} from "react"
import "./dashboard.css"

export default function Dashboard() {
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
                <div className="dashboard-host-van" key={hostVan.id}>
                    <div className="dashboard-host-van-image-and-detail">
                        <img src={hostVan.imageUrl} alt="" />
                        <div className="dashboard-host-van-detail">
                            <h1>{hostVan.name}</h1>
                            <p className="secondary-text">${hostVan.price}/day</p>
                        </div>
                    </div>
                    <p className="primary-text">Edit</p>
                </div>
        )
    })

    return (
        <section className="dashboard">
            <div className="dashboard-welcome">
                <h1 className="welcome-msg">Welcome!</h1>
                <div className="income-detail">
                    <p>Income last <span>30 days</span></p>
                    <p>Details</p>
                </div>
                <h1 className="total-income">$2,260</h1>
            </div>
            
            <div className="dashboard-review">
                <div className="review-and-rating">
                    <h3>Review score</h3>
                    <p className="rating">
                        <span className="star-image-span">
                            <img src="/Star_3.png" alt="star"/>
                        </span>
                        <span className="user-rated-no">5.0</span>
                        <span className="total-rating">/5</span>
                    </p>
                </div>
                <p className="review-detail">Details</p>
            </div>
            
            <div className="dashboard-host-vans-section">
                <div className="dashboard-host-vans-listed-vans">
                    <h1>Your listed vans</h1>
                    <p className="primary-text">View all</p>
                </div>
                <div className="dashboard-host-vans-list">
                    {hostVansList}
                </div>
            </div>
        </section>
    )
}