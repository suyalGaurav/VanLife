import './home.css'
import { Link } from 'react-router-dom';


function Home() {
    return (
      <>
        <div className="home">
          <div className="main-home">
            <p className="home-heading">You got the travel plans, we got the 
              travel vans.
            </p>
            <p className="home-heading-2">Add adventure to your life by joining the #vanlife
              movement. Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="vans" className='home-button'>
              <button>
                Find your van
              </button>
            </Link>
          </div>
        </div>
      </>
    )
}
  
  export default Home