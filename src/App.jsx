import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Layout/Home/Home'
import About from './components/Layout/About/About'
import Vans from './components/Layout/Vans/Vans'
import VanDetail from "./components/Layout/Vans/VanDetail/VanDetail"
import Error from './components/Layout/Error/Error'
import Layout from './components/Layout/Layout'
import Host from "./components/Layout/Host/HostLayout"
import Dashboard from './components/Layout/Host/Dashboard/Dashboard'
import Income from "./components/Layout/Host/Income/Income"
import Reviews from './components/Layout/Host/Reviews/Reviews'

import HostVans from './components/Layout/Host/HostVans/HostVans/HostVans'
import HostVanDetailLayout from './components/Layout/Host/HostVans/HostVanDetail/HostVanDetailLayout'
import Details from './components/Layout/Host/HostVans/HostVanDetail/Details/Details'
import Pricing from './components/Layout/Host/HostVans/HostVanDetail/Pricing/Pricing'
import Photos from './components/Layout/Host/HostVans/HostVanDetail/Photos/Photos'
import "./server"


function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          {/* Layout route will always get rendered. The route present inside will get rendered only if Outlet
          component is provided */}
          {/* Absolute routes are relative to the parent route or initial website for ex-www.example.com
            wherease relative routes are relative to their parent route */}
          <Route element={<Layout />}> 
            <Route index element = {<Home />} /> {/* default route */}

            <Route path = "host" element={<Host />} >
                <Route index element = {<Dashboard />} /> {/* default layout */}
                <Route path = "income" element={<Income />}/>
                <Route path = "vans" element={<HostVans />}/>
                <Route path = "vans/:id" element={<HostVanDetailLayout />} >
                    <Route index element= {<Details />} />
                    <Route path="pricing" element= {<Pricing />} />
                    <Route path= "photos" element= {<Photos />} />
                </Route>
                <Route path = "reviews" element={<Reviews />}/>
            </Route>

            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path ="vans/:id" element={<VanDetail />} />


            <Route path="*" element={<Error />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
