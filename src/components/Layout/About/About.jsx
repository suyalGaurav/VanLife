
import './about.css'
import { Link } from 'react-router-dom';

function About () {
    return (
      <>
        <div className="about">
          <div className="about-image">
            <img src="about_image.png" alt="about-img"/>
          </div>

          <div className="about-main">
            <div className="about-text">
              <p className="main-heading">
                Don't squeeze in a sedan when you could relax in a van.
              </p>
              <p className="about-paragraph">
                Our mission is to enliven your road trip with the perfect travel van rental. 
                Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
              </p>
              <p className="about-paragraph-2">
                Our team is full of vanlife enthusiasts who know firsthand 
                the magic of touring the world on 4 wheels.
              </p>
            </div>

            <div className="about-explore-our-vans">
              <p className="about-explore-paragraph">
                Your destination is waiting. 
              </p>
              <p className="about-explore-paragraph-2">Your van is ready.</p>
              <Link to="/vans">
                <button className="explore-button">
                  Explore our vans
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

export default About