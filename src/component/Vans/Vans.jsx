import { Link } from 'react-router-dom'
import './vans.css'
import { useEffect, useState } from 'react'

function Vans() {
    const [vans, setVans] = useState([])
    const [filter, setFilter] = useState("all")

    useEffect(()=>{
      fetch("/api/vans")
      .then((res)=> res.json())
      .then((data) => {
        data.vans ? setVans(data.vans) :  console.log("vans data doesn't exist")
      })
      .catch((error) => {
        console.error("Error fetching vans data:", error);
      });
  
    }, [])

    function filterVans(event) {
      const {id} = event.target
      setFilter(id)
    }

    // function getVan({id, name, type, price, imageUrl}) {
    //   return (
    //       <div className="van" key={id}>
    //         <p>{name}</p>
    //         <p>{type}</p>
    //         <p>{price}</p>
    //         <img src={imageUrl} alt="van-image" />
    //       </div>
    //     )
    // }

    // const allVans = 
    //   vans.map((van) => {
    //         if(filter !== "all") {
    //           return filter === van.type && getVan(van)
    //         }
    //         return getVan(van) //When filter = all
    //   })

    //More readable way to write the above code
    const allVans = vans
      .filter((van) => (filter === "all" ? true : filter === van.type)) //In case filter is all- get all vans, else- get van where their type == filter
      .map((van) => (
        <Link to={`/vans/${van.id}`}  key={van.id}>
          <div className="van">
            <img className="van-image" src={van.imageUrl} alt="van-image" />
            <div className="van-name-and-price">
              <p className='van-name'>{van.name}</p>
              <p className='van-price'>${van.price}</p>
            </div>
            <div className={`${van.type} van-type`}>
              <p>{van.type?.[0].toUpperCase() + van.type?.slice(1)}</p>
            </div>
          </div>
        </Link>
      ))

    return (
        <section className="vans-section">
            <h2>Explore our van options</h2>
            <div className="filters">
              <div className="input-div">
                <label htmlFor="simple">Simple</label>
                <input name="filters" type="radio" id="simple" checked={filter === "simple"} onChange={filterVans} />
              </div>

              <div className=" input-div">
                <label htmlFor="rugged">Rugged</label>
                <input name="filters" type="radio" id="rugged" checked={filter === "rugged"} onChange={filterVans}/>
              </div>

              <div className="input-div">
                <label htmlFor="luxury">Luxury</label>
                <input name="filters" type="radio" id="luxury" checked={filter === "luxury"} onChange={filterVans}/>
              </div>
              
              <div className="clear-filter">
                <label htmlFor="all">Clear Filters</label>
                <input name="filters" type="radio" id="all" checked={filter === "all"} onChange={filterVans}/>
              </div>
            </div>
            <div className="vans">
              {allVans}
            </div>
        </section>   
    )
}

export default Vans