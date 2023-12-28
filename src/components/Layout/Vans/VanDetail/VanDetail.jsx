import './vanDetail.css'
import { Link, useLocation, useLoaderData  } from 'react-router-dom'
import { getVansById } from '../../../../api'

export function loader({ params }) {
    const id = params.id
    return getVansById(id)
}

function Van() {
    const van = useLoaderData();

    const location = useLocation();
    const search = location["state"]?.["search"] || ""
    const vanType = location["state"]?.["type"] || "all"

    return (
        <section className='van-detail-section'>
            <Link to={`..${search}`} relative='path' className='back-to-all-vans-link'>
                &larr; { `Back to ${ vanType } vans` } 
            </Link>
            <div className="van-detail">
                <div className='van-detail-img-div'>
                    <img className="van-detail-img" src={van?.imageUrl} alt='van-image'/>
                </div>
                <div className="van-detail-all-description">
                    <div className={`van-detail-type ${van.type}`}>
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