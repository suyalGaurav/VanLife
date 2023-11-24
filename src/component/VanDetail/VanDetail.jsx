import { useEffect, useState } from 'react'
import './vanDetail.css'
import { useParams, Link  } from 'react-router-dom'

function Van() {
    const [van, setVan] = useState({})
    const { id } = useParams();

    useEffect(()=> {
        fetch(`/api/vans/${id}`)
        .then(res=> res.json())
        .then(vanData=> {
           if(vanData.vans) {
            // const updatedVanData = { 
            //     ...vanData.vans, 
            //     type: vanData.vans.type[0].toUpperCase() + vanData.vans.type.slice(1)
            // }
            // return setVan(updatedVanData)
            return setVan(vanData.vans)
           } else {
            console.log("Errro: Van data doesn't exist")
           }
        })
        .catch(error=>(
            console.log("Error: Getting van by id", error)
        ))
    }, [id])

    useEffect(()=> {
        console.log(van)
    }, [van])

    return (
        <section className='van-detail-section'>
            <Link to="/vans" className='back-to-all-vans-link'> {"<-"} Back to all vans</Link>
            <div className="van-detail">
                <div className='van-detail-img-div'>
                    <img className="van-detail-img" src={van.imageUrl} alt='van-image'/>
                </div>
                <div className="van-detail-all-description">
                    <div className='van-detail-type'>
                        {/* <p>{van.type[0].toUpperCase() + van.type.slice(1)}</p> */}
                        <p>{van.type?.[0].toUpperCase() + van.type?.slice(1)}</p>
                    </div>
                    <p className='van-detail-name'>{van.name}</p>
                    <p className='van-detail-price'>${van.price}<span>/day</span></p>
                    <p className='van-detail-description'>{van.description}</p>
                    <button className='rent-van'>Rent this van</button>
                </div>
            </div>
        </section>
    )
}

export default Van