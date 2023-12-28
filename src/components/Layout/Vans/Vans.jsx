
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from "../../../api"
import './vans.css'

export function loader() {
  return getVans()
}

export default function Vans() {
    const vans = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    let typeFilter= searchParams?.get('type')

    //In case filter is null- get all vans, else- get van by type == filter
    const filteredVans = (typeFilter === null)
      ? vans 
      : vans.filter(van => van.type === typeFilter)

    const allVanElements = filteredVans.map((van) => (
      <div className="van" key={van.id}>
        <Link 
          to={van.id}
          state={{ 
            search: `?${searchParams.toString()}`,
            type: typeFilter
          }}
        >
            <img className="van-image" src={van.imageUrl} alt="van-image" />
            <div className="van-name-and-price">
              <p className='van-name'>{van.name}</p>
              <p className='van-price'>${van.price}</p>
            </div>
            <div className={`van-type ${van.type}`}>
              <p>{van.type?.[0].toUpperCase() + van.type?.slice(1)}</p>
            </div>
          </Link>
      </div>
      ))

    function handleFilterChange(key, value) {
      setSearchParams(prevParams => {
        if(value === null) {
          prevParams.delete(key)
        } else {
          prevParams.set(key, value)
        }
        return prevParams
      })
    }

    return (
        <section className="vans-section">

            <h2>Explore our van options</h2>

            <div className="filters">
              <div className={`button-div simple-btn ${typeFilter === "simple" ? "selected-btn" : null}`}>
                <label htmlFor="simple">Simple</label>
                <button type="button" id="simple" onClick={() => handleFilterChange("type", "simple")} />
              </div>

              <div className={`button-div rugged-btn ${typeFilter === "rugged" ? "selected-btn" : null}`}>
                <label htmlFor="rugged">Rugged</label>
                <button type="button" id="rugged" onClick={() => handleFilterChange("type", "rugged")}/>
              </div>

              <div className={`button-div luxury-btn ${typeFilter === "luxury" ? "selected-btn" : null}`}>
                <label htmlFor="luxury">Luxury</label>
                <button type="button" id="luxury" onClick={() => handleFilterChange("type", "luxury")}/>
              </div>
              
              { typeFilter !== null && 
                <div className={`clear-filter`}>
                  <label htmlFor="all">Clear Filters</label>
                  <button type="button" id="all" onClick={() => handleFilterChange("type", null)}/>
                </div> 
              }
            </div>

            <div className="vans">
              {allVanElements}
            </div>

        </section>   
    )
}
