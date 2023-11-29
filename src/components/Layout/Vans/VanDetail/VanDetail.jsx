import { useEffect, useState } from 'react'
import './vanDetail.css'
import { useParams, Link, useNavigate  } from 'react-router-dom'

function Van() {
    const [van, setVan] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        fetch(`/api/vans/${id}`)
        .then(res=> res.json())
        .then(vanData=> {
           if(vanData?.vans) {
            setVan(vanData.vans)
            setLoading(false)
           } else {
            console.log("Errro: Van data doesn't exist")
            setLoading(false)
           }
        })
        .catch(error=>{
            console.log("Error: Getting van by id", error)
            setLoading(false)
        })
    }, [id])

    useEffect(()=> {
        console.log(van)
    }, [van])

    if(loading) {
        return (
            <section className='van-detail-loading-section'>
                <h1>Loading...</h1>
            </section>
        )
    } else if(!van || !van?.id) {
        navigate("/error")
    }

    return (
        <section className='van-detail-section'>
            <Link to="/vans" className='back-to-all-vans-link'> {"<-"} Back to all vans</Link>
            <div className="van-detail">
                <div className='van-detail-img-div'>
                    <img className="van-detail-img" src={van?.imageUrl} alt='van-image'/>
                </div>
                <div className="van-detail-all-description">
                    <div className='van-detail-type'>
                        <p>{van.type?.[0].toUpperCase() + van.type?.slice(1)}</p>
                    </div>
                    <p className='van-detail-name'>{van?.name}</p>
                    <p className='van-detail-price'>${van?.price}<span>/day</span></p>
                    <p className='van-detail-description'>{van?.description}</p>
                    <button className='rent-van'>Rent this van</button>
                </div>
            </div>
        </section>
    )
}

export default Van